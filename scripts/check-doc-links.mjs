import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve('docs')
const ignoredDirectories = new Set(['.vitepress', 'node_modules'])

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) return []
    const full = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(full) : entry.isFile() && entry.name.toLowerCase().endsWith('.md') ? [full] : []
  })
}

function stripTarget(value) {
  const clean = value.trim().replace(/^<|>$/g, '')
  const withoutTitle = clean.match(/^(\S+)(?:\s+["'].+["'])?$/)?.[1] ?? clean
  return decodeURI(withoutTitle.split('#')[0].split('?')[0])
}

function candidates(source, target) {
  const absolute = target.startsWith('/')
    ? path.join(root, target.slice(1))
    : path.resolve(path.dirname(source), target)
  if (path.extname(absolute)) return [absolute]
  return [absolute, `${absolute}.md`, path.join(absolute, 'index.md'), path.join(absolute, 'README.md')]
}

const problems = []
for (const file of walk(root)) {
  const content = fs.readFileSync(file, 'utf8')
  const matches = [
    ...content.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g),
    ...content.matchAll(/(?<!:)(?:src|href)=["']([^"']+)["']/g)
  ]

  for (const match of matches) {
    const raw = match[1]
    if (!raw || /^(?:https?:|mailto:|tel:|data:|#)/i.test(raw)) continue
    const target = stripTarget(raw)
    if (!target || candidates(file, target).some(candidate => fs.existsSync(candidate))) continue
    problems.push(`${path.relative(root, file)} -> ${raw}`)
  }
}

if (problems.length) {
  console.error(`Found ${problems.length} broken local documentation link(s):`)
  problems.forEach(problem => console.error(`- ${problem}`))
  process.exit(1)
}

console.log(`Checked ${walk(root).length} Markdown files: all local links and images resolve.`)
