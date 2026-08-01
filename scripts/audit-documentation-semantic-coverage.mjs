import fs from 'node:fs'
import path from 'node:path'
import { publicationManifest } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const mapPath = path.join(root, 'scripts', 'documentation-semantic-recovery-map.json')
const reportJsonPath = path.join(root, 'reports', 'documentation-semantic-recovery.json')
const reportMdPath = path.join(root, 'reports', 'documentation-semantic-recovery.md')
const allowed = new Set(['fully_recovered','recovered_with_corrections','merged_and_recovered','intentionally_removed_internal','intentionally_removed_obsolete','intentionally_removed_duplicate'])
const errors = []

if (!fs.existsSync(mapPath)) throw new Error(`Missing semantic recovery map: ${mapPath}`)
const metadata = JSON.parse(fs.readFileSync(mapPath, 'utf8'))
const published = new Map(publicationManifest.filter((entry) => entry.publicationStatus === 'published').map((entry) => [entry.path, entry]))

function destinationBody(route) {
  const entry = published.get(route)
  if (!entry) return null
  const file = path.join(root, 'docs', entry.file)
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null
}

for (const record of metadata.records) {
  if (!allowed.has(record.recoveryStatus)) errors.push(`Old page has no final disposition: ${record.oldPath}`)
  if (record.recoveryStatus === 'not_yet_recovered' || record.recoveryStatus === 'unknown' || record.recoveryStatus === 'unreviewed') errors.push(`Unfinished recovery status: ${record.oldPath}`)
  for (const section of record.sections) {
    if (section.classification !== 'valid_user_information') continue
    if (!section.currentDestination) { errors.push(`Valid old section has no destination: ${record.oldPath} -> ${section.oldHeading}`); continue }
    const body = destinationBody(section.currentDestination)
    if (!body) { errors.push(`Destination is not published: ${record.oldPath} -> ${section.currentDestination}`); continue }
    if (!section.finalRewrittenSection || !body.toLowerCase().includes(section.finalRewrittenSection.toLowerCase())) errors.push(`Mapped section is missing its rewritten section: ${record.oldPath} -> ${section.oldHeading}`)
    for (const marker of section.verificationMarkers ?? []) if (!body.toLowerCase().includes(marker.toLowerCase())) errors.push(`Destination misses marker "${marker}": ${record.oldPath} -> ${section.currentDestination}`)
    const wordCount = body.replace(/^---[\s\S]*?---/, '').split(/\s+/).filter(Boolean).length
    if (wordCount < 120) errors.push(`Replacement page is too thin for mapped coverage: ${section.currentDestination} (${wordCount} words)`)
  }
}

for (const entry of publicationManifest.filter((item) => item.publicationStatus === 'redirect')) {
  const oldPath = entry.file.replaceAll('\\', '/')
  const mapped = metadata.records.find((record) => record.oldPath === oldPath)
  if (mapped && mapped.newDestinationPage && mapped.newDestinationPage !== entry.redirectTo) errors.push(`Redirect destination conflicts with semantic map: ${oldPath}`)
  const body = destinationBody(entry.redirectTo)
  if (!body) errors.push(`Redirect target is not a published destination: ${entry.path}`)
}

const publishedBodies = [...published.values()].map((entry) => fs.readFileSync(path.join(root, 'docs', entry.file), 'utf8'))
const generic = ['Use the current page labels and confirm context before acting.', 'Active scope or profile.', 'Primary input and review area.', 'Visible save, submit, result, or status feedback.']
for (const phrase of generic) if (publishedBodies.some((body) => body.includes(phrase))) errors.push(`Generic VisualReference boilerplate remains: ${phrase}`)

fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true })
fs.writeFileSync(reportJsonPath, `${JSON.stringify(metadata.records, null, 2)}\n`)
const count = (status) => metadata.records.filter((record) => record.recoveryStatus === status).length
const validSectionCount = metadata.records.flatMap((record) => record.sections).filter((section) => section.classification === 'valid_user_information').length
fs.writeFileSync(reportMdPath, `# Documentation semantic recovery\n\n- Current redesign commit: ${metadata.currentCommit}\n- Previous baseline commit: ${metadata.baselineCommit}\n- Old pages reviewed: ${metadata.records.length}\n- Old user-facing sections identified: ${validSectionCount}\n- Fully recovered: ${count('fully_recovered')}\n- Recovered with corrections: ${count('recovered_with_corrections')}\n- Merged and recovered: ${count('merged_and_recovered')}\n- Intentionally removed as internal: ${count('intentionally_removed_internal')}\n- Intentionally removed as obsolete: ${count('intentionally_removed_obsolete')}\n- Intentionally removed as duplicate: ${count('intentionally_removed_duplicate')}\n`)

if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Semantic coverage OK: ${metadata.records.length} old pages and ${validSectionCount} valid sections have final dispositions.`)
