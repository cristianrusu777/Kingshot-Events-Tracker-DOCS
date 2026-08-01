import fs from 'node:fs'
import path from 'node:path'
import { publishedPages } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const reportDir = path.join(root, 'reports')
fs.mkdirSync(reportDir, { recursive: true })

const strip = (source) => source.replace(/^---[\s\S]*?---/m, '').replace(/```[\s\S]*?```/g, '').replace(/<[^>]+>/g, ' ')
const flags = (source) => ({
  purpose: /\b(?:purpose|problem|means|is a|models?)\b/i.test(source),
  controls: /\b(?:select|field|filter|button|control|column|input|apply all|publish)\b/i.test(source),
  workflow: /\b(?:workflow|decision order|from start to finish|step|follows this order|1\.)\b/i.test(source),
  decisionLogic: /\b(?:precedence|priority|first matching|decision|compare|evaluate|eligible|duplicate identity|calculation)\b/i.test(source),
  states: /\b(?:status|state|draft|published|locked|accepted|rejected|deleted|restored)\b/i.test(source),
  roles: /\b(?:member|leader|manager|king|reviewer|author|creator)\b/i.test(source),
  scopes: /\b(?:scope|kingdom|alliance|tenant)\b/i.test(source),
  outputs: /\b(?:output|result|summary|report|plan|confirmation)\b/i.test(source),
  limitations: /^## (?:Limitations|Limits)|\bdoes not guarantee\b|\bcannot guarantee\b/im.test(source),
  workedExample: /\*\*(?:Worked |Premium |Example)|^## Worked example/im.test(source),
  troubleshooting: /\b(?:failure|recovery|if .*wrong|troubleshoot|safe action|appears wrong)\b/i.test(source),
  diagram: /```mermaid/.test(source)
})

const rows = []
for (const page of publishedPages.filter((p) => p.product === 'kingshot-events')) {
  const source = fs.readFileSync(path.join(docs, page.file), 'utf8')
  const prose = strip(source)
  const words = prose.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length ?? 0
  const evidence = flags(source)
  const score = Object.values(evidence).filter(Boolean).length
  const genericHits = (source.match(/(?:confirm the selected scope|use the available control|reopen the source record|current responsibility permits)/gi) ?? []).length
  const classification = words < 180 ? 'thin' : genericHits >= 4 ? 'generic' : score >= 11 && words >= 650 ? 'deep' : score >= 7 && words >= 300 ? 'adequate' : /index\.md$/.test(page.file) ? 'index-only' : 'thin'
  rows.push({ file: page.file, title: page.title, words, classification, genericHits, ...evidence })
}

const summary = Object.fromEntries(['deep','adequate','thin','generic','index-only','visual-only'].map((key) => [key, rows.filter((r) => r.classification === key).length]))
fs.writeFileSync(path.join(reportDir, 'actual-content-depth-inventory.json'), JSON.stringify({ summary, pages: rows }, null, 2))
fs.writeFileSync(path.join(reportDir, 'actual-content-depth-inventory.md'), `# Actual content-depth inventory\n\nThis report reads rendered Markdown signals and prose length; it does not trust coverage metadata.\n\n${Object.entries(summary).map(([k,v]) => `- **${k}:** ${v}`).join('\n')}\n\n| Page | Class | Words | Logic | Example | Diagram | Limits |\n| --- | --- | ---: | --- | --- | --- | --- |\n${rows.map((r) => `| ${r.file} | ${r.classification} | ${r.words} | ${r.decisionLogic ? 'yes' : 'no'} | ${r.workedExample ? 'yes' : 'no'} | ${r.diagram ? 'yes' : 'no'} | ${r.limitations ? 'yes' : 'no'} |`).join('\n')}\n`)
console.log(`Actual content inventory: ${JSON.stringify(summary)}`)
