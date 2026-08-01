import fs from 'node:fs'
import path from 'node:path'
import { publishedPages } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const entries = []

for (const entry of publishedPages.filter((page) => page.product === 'kingshot-events')) {
  const source = fs.readFileSync(path.join(docs, entry.file), 'utf8')
  const match = /<VisualReference title="([^"]+)">\s*([^\n]+)[\s\S]*?<template #items>\s*([\s\S]*?)\s*<\/template>/m.exec(source)
  if (!match) continue
  const items = [...match[3].matchAll(/^\s*-\s+(.+)$/gm)].map((item) => item[1].replace(/\*\*/g, '').trim())
  entries.push({
    visualId: `ke-${String(entries.length + 1).padStart(3, '0')}`,
    product: 'Kingshot Events',
    pagePath: entry.path,
    sectionHeading: match[1],
    visualType: 'anonymized interface capture',
    safeDescription: match[2].trim(),
    requiredVisibleElements: items,
    elementsToRedact: ['real names and email addresses', 'player identifiers and private community records', 'credentials, provider keys, tokens, and payment details'],
    recommendedAltText: `${entry.title} interface showing ${items.slice(0, 3).join('; ')}.`,
    status: 'needed'
  })
}

fs.writeFileSync(path.join(docs, 'editorial', 'visual-backlog.json'), `${JSON.stringify(entries, null, 2)}\n`)
console.log(`Visual backlog rebuilt with ${entries.length} page-specific capture instructions.`)
