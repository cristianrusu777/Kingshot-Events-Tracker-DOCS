import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const hero = fs.readFileSync(path.join(docs, '.vitepress', 'theme', 'components', 'CategoryHero.vue'), 'utf8')
const icon = fs.readFileSync(path.join(docs, '.vitepress', 'theme', 'components', 'CategoryIcon.vue'), 'utf8')
const registry = fs.readFileSync(path.join(docs, '.vitepress', 'category-icons.mts'), 'utf8')
const css = fs.readFileSync(path.join(docs, '.vitepress', 'theme', 'custom.css'), 'utf8')
const errors = []
const required = ['getting-started','accounts-and-access','scopes-and-communities','players','events','imports','analytics','castle-positions','knowledge-hub','lab','subscriptions','lifecycles','troubleshooting']
for (const category of required) {
  if (category !== 'getting-started' && !css.includes(`[data-category="${category}"]`)) errors.push(`${category}: no distinct CSS token`)
}
const definitions = [...registry.matchAll(/^\s*'([^']+)':\s*\{\s*label:\s*'[^']+',\s*paths:\s*\[([^\]]+)\]/gm)]
const signatures = definitions.map((match) => match[2].replace(/\s+/g, ''))
if (definitions.length < 15 || new Set(signatures).size !== definitions.length) errors.push('Shared category icon registry is incomplete or contains duplicate shapes')
if (!/import CategoryIcon/.test(hero) || !/<CategoryIcon/.test(hero)) errors.push('CategoryHero does not use the shared category icon')
if (!/:aria-label/.test(hero) || !/aria-hidden="true"/.test(icon) || !/focusable="false"/.test(icon)) errors.push('Shared category icon and hero accessible labeling is incomplete')
if (!/repeating-linear-gradient/.test(css) || !/category-hero__label/.test(css)) errors.push('Category identity relies on color without pattern and text label reinforcement')
if (!/@media \(max-width:700px\)/.test(css) || !/\.dark \.category-hero/.test(css)) errors.push('CategoryHero lacks mobile or dark-theme treatment')
fs.mkdirSync(path.join(root, 'reports'), { recursive: true })
fs.writeFileSync(path.join(root, 'reports', 'visual-distinction-audit.json'), JSON.stringify({ categoryTokens: required, sharedIconDefinitions: definitions.length, distinctIconShapes: new Set(signatures).size, errors }, null, 2))
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Visual distinction audit OK: ${required.length} categories use ${definitions.length} shared SVG identities plus label, border, pattern, light, dark, and mobile treatments.`)
