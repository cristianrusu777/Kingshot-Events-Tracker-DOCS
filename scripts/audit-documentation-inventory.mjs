import fs from 'node:fs'
import path from 'node:path'
import { publicationManifest } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const reports = path.join(root, 'reports')
const required = ['documentation-page-inventory.json','documentation-content-audit.md','documentation-visual-inventory.json','kingshot-events-feature-coverage.json']
const errors = []
for (const report of required) if (!fs.existsSync(path.join(reports, report))) errors.push(`Missing report: ${report}`)
const inventory = JSON.parse(fs.readFileSync(path.join(reports, 'documentation-page-inventory.json'), 'utf8'))
const coverage = JSON.parse(fs.readFileSync(path.join(reports, 'kingshot-events-feature-coverage.json'), 'utf8'))
const publishedRoutes = new Set(publicationManifest.filter((entry) => entry.publicationStatus === 'published').map((entry) => entry.path))
for (const item of inventory) {
  if (!['keep','minor_rewrite','major_rewrite','merge','split','replace','delete','redirect','new'].includes(item.finalAction)) errors.push(`Invalid final action: ${item.path}`)
  if (item.reviewStatus !== 'reviewed') errors.push(`Unreviewed legacy page: ${item.path}`)
  if (item.replacementPage && !publishedRoutes.has(item.replacementPage)) errors.push(`Invalid replacement route for ${item.path}: ${item.replacementPage}`)
}
if (publicationManifest.some((entry) => !entry.publicationStatus)) errors.push('Manifest contains an unclassified publication state')
for (const feature of coverage) {
  if (!['reviewed','excluded_private_admin'].includes(feature.reviewStatus)) errors.push(`Unreviewed feature: ${feature.featureName}`)
  if (feature.documentationPage && !publishedRoutes.has(feature.documentationPage)) errors.push(`Invalid feature guide: ${feature.featureName} -> ${feature.documentationPage}`)
  if (feature.reviewStatus === 'excluded_private_admin' && !feature.exclusionReason) errors.push(`Missing private exclusion reason: ${feature.featureName}`)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Inventory audit OK: ${inventory.length} legacy pages, ${publicationManifest.length} current routes, and ${coverage.length} mechanisms classified.`)
