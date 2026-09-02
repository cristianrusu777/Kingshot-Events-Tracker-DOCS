import fs from 'node:fs'
import path from 'node:path'
import { sourceMechanismCatalog } from '../docs/.vitepress/source-mechanism-catalog.mts'

const root = path.resolve(import.meta.dirname, '..')
const reports = path.join(root, 'reports')
fs.mkdirSync(reports, { recursive: true })
const privatePath = path.join(reports, 'restricted-source-inventory.json')
const restricted = fs.existsSync(privatePath) ? JSON.parse(fs.readFileSync(privatePath, 'utf8')) : []
for (const item of sourceMechanismCatalog) {
  if (item.documentationVisibility !== 'public') throw new Error('The tracked source catalog must contain only explicitly public mechanisms.')
}
for (const item of restricted) {
  if (!['internal', 'confidential'].includes(item.documentationVisibility)) throw new Error('A restricted local record has an invalid visibility classification.')
}
const records = sourceMechanismCatalog.map(item => ({ ...item, featureName: item.mechanismName, requiredDocumentationPages: [item.docsFile] }))
fs.writeFileSync(path.join(reports, 'current-product-feature-inventory.json'), JSON.stringify([...records, ...restricted], null, 2) + '\n')
console.log('Classified visibility inventory regenerated locally; restricted records stay outside the published site.')
