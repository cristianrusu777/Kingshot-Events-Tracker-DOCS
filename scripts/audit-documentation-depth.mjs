import fs from 'node:fs'
import path from 'node:path'
import { publishedPages } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const coverage = JSON.parse(fs.readFileSync(path.join(docs, 'editorial', 'page-coverage.json'), 'utf8'))
const covered = new Map(coverage.map((item) => [item.file, item]))
const errors = []
const stats = []
const longParagraphs = new Map()

for (const page of publishedPages.filter((item) => item.product === 'kingshot-events')) {
  const source = fs.readFileSync(path.join(docs, page.file), 'utf8')
  const prose = source.replace(/^---[\s\S]*?---/m, '').replace(/```[\s\S]*?```/g, '').replace(/<[^>]+>/g, ' ')
  const words = prose.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length ?? 0
  const headings = source.match(/^##\s+/gm)?.length ?? 0
  const metadata = covered.get(page.file)
  const minimum = metadata ? (metadata.pageType === 'category landing' ? 520 : 600) : 220
  if (words < minimum) errors.push(`${page.file}: ${words} words, requires ${minimum}`)
  if (metadata && headings < 6) errors.push(`${page.file}: ${headings} H2 sections, requires 6`)
  for (const concept of metadata?.requiredConcepts ?? []) {
    const patterns = { scope:/\bscope\b/i, role:/\brole\b/i, status:/\bstatus(?:es)?\b/i, controls:/\bcontrols?\b/i, 'save or review behavior':/\b(?:save|review|publish|apply)\b/i, troubleshooting:/\b(?:not what you expected|troubleshoot|problem)\b/i }
    if (!patterns[concept]?.test(source)) errors.push(`${page.file}: missing required concept ${concept}`)
  }
  stats.push({ file: page.file, words, headings, pageType: metadata?.pageType ?? 'existing guide' })
  if (metadata) {
    for (const paragraph of source.split(/\n\s*\n/).map((value) => value.replace(/\s+/g, ' ').trim()).filter((value) => value.length >= 140 && !value.startsWith('---'))) {
      if (!longParagraphs.has(paragraph)) longParagraphs.set(paragraph, [])
      longParagraphs.get(paragraph).push(page.file)
    }
  }
}

for (const [paragraph, files] of longParagraphs) {
  if (files.length >= 3) errors.push(`Repeated boilerplate across ${files.length} catalog pages: ${paragraph.slice(0, 90)}...`)
}

fs.mkdirSync(path.join(root, 'reports'), { recursive: true })
fs.writeFileSync(path.join(root, 'reports', 'documentation-depth-audit.json'), JSON.stringify({ generatedAt: new Date().toISOString(), pages: stats, errors }, null, 2))
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Depth audit OK: ${stats.length} Kingshot pages inspected; ${coverage.length} catalog pages meet enhanced thresholds.`)
