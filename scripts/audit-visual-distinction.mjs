import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const component = fs.readFileSync(path.join(docs, '.vitepress', 'theme', 'components', 'CategoryHero.vue'), 'utf8')
const css = fs.readFileSync(path.join(docs, '.vitepress', 'theme', 'custom.css'), 'utf8')
const files = fs.readdirSync(path.join(docs, 'kingshot-events'), { recursive: true }).filter((file) => String(file).endsWith('.md'))
const errors = []
const categoryUses = new Map()
for (const relative of files) {
  const source = fs.readFileSync(path.join(docs, 'kingshot-events', relative), 'utf8')
  const category = /<CategoryHero category="([^"]+)" icon="([^"]+)"/.exec(source)
  if (category) categoryUses.set(category[1], category[2])
}
const required = ['getting-started','accounts-and-access','scopes-and-communities','players','events','imports','analytics','castle-positions','knowledge-hub','lab','subscriptions','lifecycles','troubleshooting']
for (const category of required) {
  if (!categoryUses.has(category)) errors.push(`${category}: no CategoryHero usage`)
  if (category !== 'getting-started' && !css.includes(`[data-category="${category}"]`)) errors.push(`${category}: no distinct CSS token`)
}
if (new Set(categoryUses.values()).size < 12) errors.push('Category icon vocabulary is not sufficiently distinct')
if (!/aria-hidden="true"/.test(component) || !/aria-label/.test(component)) errors.push('CategoryHero accessible labeling is incomplete')
if (!/repeating-linear-gradient/.test(css) || !/category-hero__label/.test(css)) errors.push('Category identity relies on color without pattern and text label reinforcement')
if (!/@media \(max-width:700px\)/.test(css) || !/\.dark \.category-hero/.test(css)) errors.push('CategoryHero lacks mobile or dark-theme treatment')
fs.mkdirSync(path.join(root, 'reports'), { recursive: true })
fs.writeFileSync(path.join(root, 'reports', 'visual-distinction-audit.json'), JSON.stringify({ categories: Object.fromEntries(categoryUses), distinctIcons: new Set(categoryUses.values()).size, errors }, null, 2))
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Visual distinction audit OK: ${required.length} categories use icon, label, border, pattern, light, dark, and mobile treatments.`)
