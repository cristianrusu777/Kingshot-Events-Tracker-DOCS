import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const inventoryPath = path.join(root, 'reports', 'current-product-feature-inventory.json')
const docsRoot = path.join(root, 'docs')
const restricted = []

if (fs.existsSync(inventoryPath)) {
  const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'))
  for (const item of inventory) {
    if (!['internal', 'confidential'].includes(item.documentationVisibility)) continue
    restricted.push(item.featureName, item.routeOrEntryPoint, ...(item.requiredDocumentationPages ?? []))
  }
}

const leaks = []
function visit(target) {
  const stat = fs.statSync(target)
  if (stat.isDirectory()) {
    for (const name of fs.readdirSync(target)) {
      if (!['node_modules', 'dist'].includes(name)) visit(path.join(target, name))
    }
    return
  }
  if (!/\.(?:md|json|mts|ts|vue|css|html)$/i.test(target)) return
  const content = fs.readFileSync(target, 'utf8').toLowerCase()
  for (const value of restricted.filter(Boolean)) {
    if (String(value).length >= 4 && content.includes(String(value).toLowerCase())) {
      leaks.push(path.relative(root, target))
    }
  }
}

visit(docsRoot)
if (leaks.length) {
  console.error(`Documentation visibility check failed: ${[...new Set(leaks)].join(', ')}`)
  process.exit(1)
}
console.log(`Documentation visibility check passed (${restricted.length} restricted identifiers kept outside public docs).`)
