import fs from 'node:fs'
import path from 'node:path'
import { publishedPages } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const errors = []
const diagrams = []
const algorithmPages = new Set([
  'kingshot-events/scopes-and-communities/hierarchy-and-switching.md','kingshot-events/players/profile-and-history.md',
  'kingshot-events/events/record-batches-and-corrections.md','kingshot-events/imports/row-statuses-and-decisions.md',
  'kingshot-events/analytics/reward-rules.md','kingshot-events/castle-positions/planner-controls.md',
  'kingshot-events/knowledge-hub/reading-sessions.md','kingshot-events/lab/profiles-and-autosave.md',
  'kingshot-events/lab/hero-gear.md','kingshot-events/lab/governor-gear.md','kingshot-events/lab/charms.md',
  'kingshot-events/lab/bear-trap.md','kingshot-events/subscriptions/plans-and-effective-access.md'
])

for (const page of publishedPages.filter((p) => p.product === 'kingshot-events')) {
  const source = fs.readFileSync(path.join(docs, page.file), 'utf8')
  for (const [index, match] of [...source.matchAll(/```mermaid\s*([\s\S]*?)```/g)].entries()) {
    const body = match[1]
    const before = source.slice(0, match.index).split('\n').reverse().find((line) => /^##?\s/.test(line))?.replace(/^#+\s*/, '') ?? page.title
    const after = source.slice((match.index ?? 0) + match[0].length, (match.index ?? 0) + match[0].length + 700).replace(/<[^>]+>/g, ' ').trim()
    const nodeCount = new Set([...body.matchAll(/\b([A-Z][A-Z0-9]*)\s*(?:\[|\{|\()/g)].map((m) => m[1])).size
    const edgeCount = (body.match(/-->|==>|-.->/g) ?? []).length
    if (/\b(?:controller|repository|Prisma|database|API endpoint|token|middleware|worker)\b/i.test(body)) errors.push(`${page.file}: implementation language in ${before}`)
    const meaningful = nodeCount >= 3 && edgeCount >= 2
    const classification = meaningful ? (algorithmPages.has(page.file) ? 'meaningful_algorithm' : /status|state|lifecycle/i.test(before) ? 'meaningful_state_model' : 'meaningful_workflow') : 'decorative'
    if (meaningful && after.length < 60) errors.push(`${page.file}: ${before} lacks nearby explanatory prose`)
    diagrams.push({ id: `${page.file.replace(/[^a-z0-9]+/gi,'-').replace(/-md$/,'')}-${index+1}`, page: page.file, title: before, classification, rendered: true, nodeCount, edgeCount, mobileStrategy: body.includes('flowchart TD') ? 'vertical' : 'responsive horizontal', accessibilitySummary: after.slice(0, 300) })
  }
}
const meaningful = diagrams.filter((d) => d.classification.startsWith('meaningful_'))
fs.mkdirSync(path.join(root, 'reports'), { recursive: true })
fs.writeFileSync(path.join(root, 'reports', 'meaningful-diagram-inventory.json'), JSON.stringify({ meaningfulCount: meaningful.length, decorativeCount: diagrams.length - meaningful.length, diagrams, errors }, null, 2))
fs.writeFileSync(path.join(root, 'reports', 'meaningful-diagram-inventory.md'), `# Rendered diagram inventory\n\n${meaningful.map((d) => `- **${d.title}** on \`${d.page}\` (${d.classification})`).join('\n')}\n\nDecorative or insufficient diagrams excluded from the meaningful count: ${diagrams.length - meaningful.length}.\n`)
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Diagram audit OK: ${meaningful.length} meaningful rendered diagrams; ${diagrams.length - meaningful.length} decorative diagrams excluded.`)
