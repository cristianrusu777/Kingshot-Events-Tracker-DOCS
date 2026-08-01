import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const roots = ['docs', 'reports']
const ignored = new Set(['node_modules', '.vitepress-cache', 'dist'])
const leaks = []

function visit(target) {
  if (!fs.existsSync(target)) return
  const stat = fs.statSync(target)
  if (stat.isDirectory()) {
    for (const name of fs.readdirSync(target)) {
      if (!ignored.has(name)) visit(path.join(target, name))
    }
    return
  }
  if (!/\.(?:md|json|mts|ts|vue|css|html)$/i.test(target)) return
  const text = fs.readFileSync(target, 'utf8')
  for (const fragment of forbidden) {
    if (text.toLowerCase().includes(fragment.toLowerCase())) leaks.push(path.relative(root, target))
  }
}

for (const directory of roots) visit(path.join(root, directory))
if (leaks.length) {
  console.error(`Confidential documentation exclusion failed: ${[...new Set(leaks)].join(', ')}`)
  process.exit(1)
}
console.log('Confidential documentation exclusion passed.')
