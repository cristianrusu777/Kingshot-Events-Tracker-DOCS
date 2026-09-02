import fs from 'node:fs'
import path from 'node:path'
const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'docs', '.vitepress', 'dist')
if (!fs.existsSync(dist)) throw new Error('Build the documentation before checking the public output.')
const inventory = JSON.parse(fs.readFileSync(path.join(root, 'reports', 'current-product-feature-inventory.json'), 'utf8'))
const restricted = inventory.filter(item => ['internal', 'confidential'].includes(item.documentationVisibility))
  .flatMap(item => [item.featureName, item.routeOrEntryPoint, ...(item.requiredDocumentationPages ?? [])]).filter(value => value && value.length >= 4).map(value => value.toLowerCase())
const errors = new Set()
let count = 0
function check(file) {
  const body = fs.readFileSync(file, 'utf8').toLowerCase()
  count++
  if (restricted.some(value => body.includes(value)) || /[a-z]:[\\/]+users[\\/]/i.test(body)) errors.add(path.relative(root, file))
}
function walk(dir) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name)
    if (item.isDirectory()) walk(file)
    else if (/\.(html|js|json|xml|txt|map)$/i.test(file)) check(file)
  }
}
walk(dist)
const draft = path.join(root, 'reports', 'public-update-draft-2026-09-03.md')
if (fs.existsSync(draft)) check(draft)
if (errors.size) { console.error('Public-output check failed: ' + [...errors].join(', ')); process.exit(1) }
console.log('Public-output privacy check passed for ' + count + ' generated files and available update draft.')
