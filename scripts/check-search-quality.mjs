import { publishedPages } from '../docs/.vitepress/publication-manifest.mts'
import { searchIndex } from '../docs/.vitepress/generated-search-index.mts'
import { rankedSearch } from '../docs/.vitepress/search-engine.mts'
import { resolveSearchMetadata } from '../docs/.vitepress/search-metadata.mts'

const allowedTypes = new Set(['Overview', 'How it works', 'Task guide', 'Algorithm and decision logic', 'Status reference', 'Troubleshooting', 'Role journey'])
const productPages = publishedPages.filter((page) => page.product === 'kingshot-events')
const failures = []

for (const page of productPages) {
  const metadata = resolveSearchMetadata(page)
  const indexed = searchIndex.find((record) => record.path === page.path)
  if (!allowedTypes.has(metadata.contentType)) failures.push(`${page.path}: missing explicit content type`)
  if (!indexed) failures.push(`${page.path}: absent from unified index`)
  else if (!indexed.sections.length || !indexed.sections.some((section) => section.heading && section.text)) failures.push(`${page.path}: no searchable real section`)
}

const expectations = [
  ['duplicate screenshot', '/kingshot-events/imports/row-statuses-and-decisions'],
  ['duplicte screensht', '/kingshot-events/imports/row-statuses-and-decisions'],
  ['same date', '/kingshot-events/events/record-batches-and-corrections'],
  ['castle standby', '/kingshot-events/castle-positions/planner-controls'],
  ['reading code', '/kingshot-events/knowledge-hub/reading-sessions'],
  ['profile autosave', '/kingshot-events/lab/profiles-and-autosave'],
  ['grant quota', '/kingshot-events/subscriptions/plans-and-effective-access'],
  ['server kingdom difference', '/kingshot-events/scopes-and-communities/hierarchy-and-switching']
]
for (const [query, expected] of expectations) {
  const top = rankedSearch(query).slice(0, 3).map((record) => record.path)
  if (!top.includes(expected)) failures.push(`query "${query}" did not rank ${expected} in top 3 (${top.join(', ')})`)
}

if (failures.length) {
  console.error(`Search quality check failed:\n- ${failures.join('\n- ')}`)
  process.exit(1)
}
console.log(`Search quality check passed: ${searchIndex.length} guides, real sections, explicit types, fuzzy-query ranking.`)
