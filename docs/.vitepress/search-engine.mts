import { searchIndex } from './generated-search-index.mts'

export type SearchRecord = (typeof searchIndex)[number]
export type RankedResult = SearchRecord & { score: number; matchingSection: string; snippet: string }

export const normalizeSearchText = (value: string) => value
  .normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ').trim()

const tokens = (value: string) => normalizeSearchText(value).split(' ').filter(Boolean)

function editDistance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index)
  for (let i = 1; i <= a.length; i += 1) {
    let diagonal = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j += 1) {
      const previous = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, diagonal + (a[i - 1] === b[j - 1] ? 0 : 1))
      diagonal = previous
    }
  }
  return row[b.length]
}

function tokenScore(queryToken: string, candidate: string) {
  if (candidate === queryToken) return 18
  if (candidate.startsWith(queryToken) || queryToken.startsWith(candidate)) return 12
  const tolerance = queryToken.length >= 8 ? 2 : queryToken.length >= 5 ? 1 : 0
  return tolerance && editDistance(queryToken, candidate) <= tolerance ? 8 : 0
}

function fieldScore(query: string, queryTokens: string[], value: string, phraseWeight: number, tokenWeight = 1) {
  const normalized = normalizeSearchText(value)
  let score = normalized.includes(query) ? phraseWeight : 0
  const candidateTokens = tokens(normalized)
  for (const queryToken of queryTokens) score += Math.max(0, ...candidateTokens.map((candidate) => tokenScore(queryToken, candidate))) * tokenWeight
  return score
}

export function rankedSearch(query: string): RankedResult[] {
  const normalizedQuery = normalizeSearchText(query)
  const queryTokens = tokens(query)
  if (!normalizedQuery) return searchIndex.map((record, index) => ({ ...record, score: 1 - index / 1000, matchingSection: record.sections[0]?.heading ?? 'Introduction', snippet: record.description }))

  return searchIndex.map((record) => {
    const titleScore = fieldScore(normalizedQuery, queryTokens, record.title, 150, 2)
    const aliasScore = fieldScore(normalizedQuery, queryTokens, record.aliases.join(' '), 105, 1.5)
    const metadataScore = fieldScore(normalizedQuery, queryTokens, `${record.category} ${record.featureArea} ${record.audience} ${record.contentType}`, 45)
    let bestSection = record.sections[0] ?? { heading: 'Introduction', text: record.description }
    let bestSectionScore = -1
    for (const section of record.sections) {
      const score = fieldScore(normalizedQuery, queryTokens, section.heading, 90, 1.5) + fieldScore(normalizedQuery, queryTokens, section.text, 35, .65)
      if (score > bestSectionScore) { bestSection = section; bestSectionScore = score }
    }
    const searchable = normalizeSearchText([record.title, record.aliases.join(' '), record.category, record.featureArea, ...record.sections.map((section) => `${section.heading} ${section.text}`)].join(' '))
    const coverage = queryTokens.filter((token) => tokens(searchable).some((candidate) => tokenScore(token, candidate) > 0)).length
    const score = titleScore + aliasScore + metadataScore + Math.max(0, bestSectionScore) + coverage * 20
    return { ...record, score, matchingSection: bestSection.heading, snippet: bestSection.text.slice(0, 260) }
  }).filter((record) => record.score > 0).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
}
