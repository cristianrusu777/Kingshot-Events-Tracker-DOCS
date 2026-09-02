import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'

const source = fs.readFileSync(new URL('./check-documentation-visibility.mjs', import.meta.url), 'utf8')
  .replace(/^import .+$/gm, '').replaceAll('import.meta.dirname', JSON.stringify(path.resolve('virtual-docs/scripts')))
function run(inventory, content = 'A useful public guide') {
  const root = path.resolve('virtual-docs')
  const report = path.join(root, 'reports', 'current-product-feature-inventory.json')
  const docs = path.join(root, 'docs')
  const doc = path.join(docs, 'guide.md')
  let exit = 0
  const fakeFs = {
    existsSync: file => file !== report || inventory !== undefined,
    readFileSync: file => file === report ? JSON.stringify(inventory) : content,
    statSync: file => ({ isDirectory: () => file === docs }),
    readdirSync: () => ['guide.md']
  }
  try { vm.runInNewContext(source, { fs: fakeFs, path, console: { log() {}, error() {} }, process: { exit(code) { exit = code; throw new Error('exit') } } }) }
  catch (error) { if (error.message !== 'exit') throw error }
  return exit
}
test('explicit public record can pass', () => assert.equal(run([{ documentationVisibility: 'public', featureName: 'Guest planner' }]), 0))
test('missing visibility inventory fails closed', () => assert.equal(run(undefined), 1))
test('unclassified record fails closed', () => assert.equal(run([{ featureName: 'Unclassified example' }]), 1))
test('restricted names cannot enter public text', () => assert.equal(run([{ documentationVisibility: 'confidential', featureName: 'PrivateFixtureFeature' }], 'PrivateFixtureFeature'), 1))
test('restricted routes cannot enter public text', () => assert.equal(run([{ documentationVisibility: 'internal', routeOrEntryPoint: '/private-fixture/example' }], 'See /private-fixture/example'), 1))
test('restricted records may stay outside public text', () => assert.equal(run([{ documentationVisibility: 'internal', featureName: 'PrivateFixtureFeature' }]), 0))
