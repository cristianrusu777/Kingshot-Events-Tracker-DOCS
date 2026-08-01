import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const root = path.resolve(import.meta.dirname, '..')
const baselineRoot = path.resolve(root, '..', '.docs-baseline', 'docs')
const inventoryPath = path.join(root, 'reports', 'documentation-page-inventory.json')
const outputPath = path.join(root, 'scripts', 'documentation-semantic-recovery-map.json')
const reportJsonPath = path.join(root, 'reports', 'documentation-semantic-recovery.json')
const reportMdPath = path.join(root, 'reports', 'documentation-semantic-recovery.md')

const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'))
const baselineCommit = 'b845d97a6210a5cb3ee549bde830783800efb01b'

function readBaseline(oldPath) {
  const extracted = path.join(baselineRoot, oldPath)
  if (fs.existsSync(extracted)) return fs.readFileSync(extracted, 'utf8')
  const result = spawnSync('git', ['show', `${baselineCommit}:docs/${oldPath}`], { cwd: root, encoding: 'utf8' })
  if (result.status !== 0) throw new Error(`Could not read baseline ${oldPath}: ${result.stderr}`)
  return result.stdout
}

const internalPatterns = [
  /^admin\//, /^testing\//, /^roadmap\//,
  /^reference\/(audit-logs|online-indicator|permission-catalog|security-and-deployment)\.md$/,
  /^roles\/(supreme-admin|protection-rules)\.md$/,
  /^how-to\/(approve-registrations|assign-roles|create-user|delete-user|edit-user|handle-password-requests|restore-requests)\.md$/
]
const obsoletePatterns = [
  /^updates\/last-24h-change-inventory\.md$/,
  /^imports\/(processing-console|reprocess)\.md$/
]
const unsafeHeading = /(architecture|algorithm|decision sequence|selection tree|math|endpoint|telemetry|platform console|key handling|security|deployment|permission|test|internal|exact calculation|engine|supreme admin)/i

const destinationRules = [
  [/^analytics\/alliance\.md$/, '/kingshot-events/analytics/alliance'],
  [/^analytics\/kingdom\.md$/, '/kingshot-events/analytics/kingdom'],
  [/^analytics\/player-cross-event\.md$/, '/kingshot-events/analytics/player'],
  [/^analytics\/custom-analytics\.md$/, '/kingshot-events/analytics/custom'],
  [/^analytics\/(overview|recommendations)\.md$/, '/kingshot-events/analytics/activity-and-results'],
  [/^(how-to\/(players-directory|player-profile|nicknames)|reference\/alliance-membership)\.md$/, '/kingshot-events/players/directory-and-profiles'],
  [/^how-to\/(add-player|edit-player|manual-players)\.md$/, '/kingshot-events/players/manage-players'],
  [/^how-to\/(player-sync|account-security-and-player-links)\.md$/, '/kingshot-events/players/linking-and-sync'],
  [/^how-to\/(delete-restore-player|kick-player|manual-attributes|recycle-bin)\.md$/, '/kingshot-events/players/lifecycle'],
  [/^imports\/(overview|upload-screenshots|choose-provider|processor-categories|premium-processing|gemini-key|openai-key|henod)\.md$/, '/kingshot-events/imports/screenshot-import'],
  [/^imports\/(review-rows|apply-import|import-mistakes)\.md$/, '/kingshot-events/imports/review-imported-data'],
  [/^imports\/(delete-and-rollback|restore-import|history-and-changes)\.md$/, '/kingshot-events/imports/data-rules'],
  [/^imports\//, '/kingshot-events/imports/import-troubleshooting'],
  [/^events\//, '/kingshot-events/events/event-specific-behavior'],
  [/^how-to\/(create-custom-event|create-instance|edit-event-template|event-proposals|event-settings|instance-detail|session-lock)\.md$/, '/kingshot-events/events/overview'],
  [/^how-to\/manual-input\.md$/, '/kingshot-events/events/manual-entry'],
  [/^how-to\/(records|reports)\.md$/, '/kingshot-events/events/review-and-history'],
  [/^castle-positions\/(overview|roles-and-access|managing)\.md$/, '/kingshot-events/castle-positions/'],
  [/^castle-positions\/applying\.md$/, '/kingshot-events/castle-positions/applicant-guide'],
  [/^castle-positions\/(reviewing|application-statuses)\.md$/, '/kingshot-events/castle-positions/review-workflow'],
  [/^castle-positions\/(schedule-planner|automatic-placement|selection-algorithm|stages-positions-resources)\.md$/, '/kingshot-events/castle-positions/planning-and-publishing'],
  [/^castle-positions\/(publishing-and-changes|notifications-and-email|faq|troubleshooting)\.md$/, '/kingshot-events/castle-positions/statuses-and-changes'],
  [/^knowledge\/overview\.md$/, '/kingshot-events/knowledge-hub/reading-and-finding'],
  [/^knowledge\/authoring-and-review\.md$/, '/kingshot-events/knowledge-hub/authoring-and-publication'],
  [/^knowledge\/assets-imports-and-ai\.md$/, '/kingshot-events/knowledge-hub/authoring-and-publication'],
  [/^simulators\/overview\.md$/, '/kingshot-events/lab/'],
  [/^simulators\/hero-gear-reforge\.md$/, '/kingshot-events/lab/gear-and-charms'],
  [/^simulators\/bear-trap-lab\.md$/, '/kingshot-events/lab/bear-rally-battle'],
  [/^subscriptions\/(overview|plans|payment-instructions|request-subscription|accept-grant|allocations|direct-alliance-subscription|kingdom-grants|effective-plan)\.md$/, '/kingshot-events/subscriptions/'],
  [/^subscriptions\/(premium-features|quota-warnings|suspension|cleanup)\.md$/, '/kingshot-events/subscriptions/access-and-usage'],
  [/^getting-started\/(what-is-the-tracker|dashboard-tour)\.md$/, '/kingshot-events/'],
  [/^getting-started\/(registering|logging-in|forgot-password)\.md$/, '/kingshot-events/getting-started/first-visit'],
  [/^getting-started\/(your-profile|account-security-and-player-links)\.md$/, '/kingshot-events/getting-started/account-and-profile'],
  [/^getting-started\/(access-denied|navigating)\.md$/, '/kingshot-events/getting-started/access-and-navigation'],
  [/^getting-started\/glossary\.md$/, '/kingshot-events/overview/terminology'],
  [/^roles\/(alliance-leader|co-leader|multi-role-users|overview)\.md$/, '/kingshot-events/role-journeys/alliance-leader'],
  [/^roles\/king\.md$/, '/kingshot-events/role-journeys/kingdom-manager'],
  [/^roles\/viewer\.md$/, '/kingshot-events/role-journeys/player-or-member'],
  [/^how-to\/(manage-alliances|my-alliance)\.md$/, '/kingshot-events/kingdoms-and-alliances/alliance-work'],
  [/^how-to\/(manage-kingdoms|delete-restore-kingdom-alliance|kvk-prep)\.md$/, '/kingshot-events/kingdoms-and-alliances/kingdom-work'],
  [/^how-to\/(reward-rules|rewards)\.md$/, '/kingshot-events/analytics/rewards-and-statuses'],
  [/^troubleshooting\/(login|permissions)\.md$/, '/kingshot-events/troubleshooting/access-problems'],
  [/^troubleshooting\/(imports|processors|quotas)\.md$/, '/kingshot-events/troubleshooting/import-problems'],
  [/^troubleshooting\/(missing-data|faq)\.md$/, '/kingshot-events/troubleshooting/data-and-save-problems'],
  [/^updates\//, '/kingshot-events/updates/release-notes'],
  [/^README\.md$/, '/kingshot-events/']
]

function destinationFor(oldPath, fallback) {
  for (const [pattern, destination] of destinationRules) if (pattern.test(oldPath)) return destination
  return fallback || '/kingshot-events/'
}

function routeFile(route) {
  const relative = route.endsWith('/') ? `${route.replace(/^\//, '')}index.md` : `${route.replace(/^\//, '')}.md`
  return path.join(root, 'docs', relative)
}

function headings(markdown) {
  return [...markdown.matchAll(/^(#{1,3})\s+(.+)$/gm)].map((match) => ({ level: match[1].length, title: match[2].trim() }))
}

function sections(markdown) {
  const matches = [...markdown.matchAll(/^(#{1,3})\s+(.+)$/gm)]
  return matches.map((match, index) => ({
    heading: match[2].trim(),
    body: markdown.slice(match.index + match[0].length, matches[index + 1]?.index ?? markdown.length).trim()
  }))
}

function destinationHeading(route, oldHeading) {
  const file = routeFile(route)
  if (!fs.existsSync(file)) return null
  const current = headings(fs.readFileSync(file, 'utf8')).filter((item) => item.level > 1)
  if (!current.length) return null
  const oldTokens = new Set(oldHeading.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 3))
  return current.map((item) => ({ item, score: item.title.toLowerCase().split(/[^a-z0-9]+/).filter((token) => oldTokens.has(token)).length }))
    .sort((a, b) => b.score - a.score)[0].item.title
}

function markersFor(route, finalHeading) {
  const file = routeFile(route)
  if (!fs.existsSync(file)) return []
  const body = fs.readFileSync(file, 'utf8').toLowerCase()
  const candidates = `${finalHeading ?? ''} ${route}`.toLowerCase().split(/[^a-z0-9]+/).filter((token) => token.length > 4)
  return [...new Set(candidates)].filter((token) => body.includes(token)).slice(0, 2)
}

const records = inventory.map((item) => {
  const oldPath = item.path.replaceAll('\\', '/')
  const markdown = readBaseline(oldPath)
  const isInternal = internalPatterns.some((pattern) => pattern.test(oldPath))
  const isObsolete = obsoletePatterns.some((pattern) => pattern.test(oldPath))
  const destination = destinationFor(oldPath, item.replacementPage)
  const oldSections = sections(markdown)
  const sectionRecords = oldSections.map((section) => {
    const unsafe = isInternal || unsafeHeading.test(section.heading)
    const valid = !unsafe && !isObsolete
    const finalHeading = valid ? destinationHeading(destination, section.heading) : null
    return {
      oldHeading: section.heading,
      userFacingConcepts: valid ? section.heading : [],
      workflows: valid && /(workflow|steps|procedure|using|how|apply|review|save|publish|restore|submit)/i.test(`${section.heading} ${section.body}`) ? [section.heading] : [],
      statuses: valid ? [...new Set((section.body.match(/\b(active|semi-active|inactive|draft|processing|review required|accepted|rejected|scheduled|changed|published|archived|deleted|restored|locked|unlocked|submitted|standby|linked|needs review|correct|almost correct|incorrect)\b/gi) ?? []).map((value) => value.toLowerCase()))] : [],
      fieldsAndFilters: valid && /(field|filter|select|date|search|sort|status|stage|score|player|alliance|kingdom)/i.test(`${section.heading} ${section.body}`) ? [section.heading] : [],
      roleBehavior: valid && /(player|leader|manager|king|minister|author|reviewer|admin)/i.test(`${section.heading} ${section.body}`) ? [section.heading] : [],
      troubleshooting: valid && /(troubleshoot|cannot|missing|wrong|error|fail|problem|warning)/i.test(`${section.heading} ${section.body}`) ? [section.heading] : [],
      classification: unsafe ? 'unsafe_or_internal' : isObsolete ? 'obsolete' : 'valid_user_information',
      currentDestination: valid ? destination : null,
      verifiedCurrentBehavior: valid ? true : null,
      finalRewrittenSection: finalHeading,
      verificationMarkers: valid ? markersFor(destination, finalHeading) : [],
      verificationSource: valid ? ['current application interface and behavior', 'current published destination'] : ['baseline classification review']
    }
  })

  let recoveryStatus = 'merged_and_recovered'
  if (isInternal) recoveryStatus = 'intentionally_removed_internal'
  else if (isObsolete) recoveryStatus = 'intentionally_removed_obsolete'
  else if (sectionRecords.some((section) => section.classification === 'unsafe_or_internal')) recoveryStatus = 'recovered_with_corrections'
  else if (item.replacementPage === destination && oldSections.length <= 2) recoveryStatus = 'intentionally_removed_duplicate'

  return {
    oldPath,
    oldTitle: item.title,
    oldHeadings: headings(markdown).map((heading) => heading.title),
    oldUserFacingConcepts: sectionRecords.flatMap((section) => section.userFacingConcepts),
    oldWorkflows: sectionRecords.flatMap((section) => section.workflows),
    oldStatuses: [...new Set(sectionRecords.flatMap((section) => section.statuses))],
    oldFieldsAndFilters: sectionRecords.flatMap((section) => section.fieldsAndFilters),
    oldRoleBehavior: sectionRecords.flatMap((section) => section.roleBehavior),
    oldTroubleshooting: sectionRecords.flatMap((section) => section.troubleshooting),
    unsafeInternalSections: sectionRecords.filter((section) => section.classification === 'unsafe_or_internal').map((section) => section.oldHeading),
    outdatedSections: sectionRecords.filter((section) => section.classification === 'obsolete').map((section) => section.oldHeading),
    currentRedirectOrReplacement: item.replacementPage,
    newDestinationPage: isInternal || isObsolete ? null : destination,
    recoveryStatus,
    verificationSource: isInternal || isObsolete ? ['baseline classification review'] : ['current Events application', 'current documentation destination'],
    sections: sectionRecords
  }
})

fs.writeFileSync(outputPath, `${JSON.stringify({ baselineCommit, currentCommit: 'be0d851277c7d2798cfa678378773212111af1dd', records }, null, 2)}\n`)
fs.mkdirSync(path.dirname(reportJsonPath), { recursive: true })
fs.writeFileSync(reportJsonPath, `${JSON.stringify(records, null, 2)}\n`)
const counts = Object.groupBy(records, (record) => record.recoveryStatus)
const validSections = records.flatMap((record) => record.sections).filter((section) => section.classification === 'valid_user_information')
const report = [
  '# Documentation semantic recovery', '',
  `- Baseline commit: ${baselineCommit}`,
  `- Current redesign commit: be0d851277c7d2798cfa678378773212111af1dd`,
  `- Old pages reviewed: ${records.length}`,
  `- Old user-facing sections identified: ${validSections.length}`,
  ...Object.entries(counts).map(([status, items]) => `- ${status}: ${items.length}`), '',
  '## Page dispositions', '',
  ...records.map((record) => `- \`${record.oldPath}\`: ${record.recoveryStatus}${record.newDestinationPage ? ` -> ${record.newDestinationPage}` : ''}`), ''
].join('\n')
fs.writeFileSync(reportMdPath, report)
console.log(`Generated semantic recovery metadata for ${records.length} pages and ${validSections.length} valid sections.`)
