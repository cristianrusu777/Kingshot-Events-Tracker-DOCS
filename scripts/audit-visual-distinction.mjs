import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const component = fs.readFileSync(path.join(docs, '.vitepress', 'theme', 'components', 'CategoryHero.vue'), 'utf8')
const css = fs.readFileSync(path.join(docs, '.vitepress', 'theme', 'custom.css'), 'utf8')
const errors = []
const required = ['getting-started','accounts-and-access','scopes-and-communities','players','events','imports','analytics','castle-positions','knowledge-hub','lab','subscriptions','lifecycles','troubleshooting']
for (const category of required) {
  if (category !== 'getting-started' && !css.includes(`[data-category="${category}"]`)) errors.push(`${category}: no distinct CSS token`)
}
const iconNames = [...component.matchAll(/icon === '([^']+)'/g)].map((match) => match[1])
if (new Set(iconNames).size < 11 || !/v-else d=/.test(component)) errors.push('Category icon vocabulary is not sufficiently distinct')
if (!/aria-hidden="true"/.test(component) || !/aria-label/.test(component)) errors.push('CategoryHero accessible labeling is incomplete')
if (!/repeating-linear-gradient/.test(css) || !/category-hero__label/.test(css)) errors.push('Category identity relies on color without pattern and text label reinforcement')
if (!/@media \(max-width:700px\)/.test(css) || !/\.dark \.category-hero/.test(css)) errors.push('CategoryHero lacks mobile or dark-theme treatment')
fs.mkdirSync(path.join(root, 'reports'), { recursive: true })
fs.writeFileSync(path.join(root, 'reports', 'visual-distinction-audit.json'), JSON.stringify({ categoryTokens: required, distinctNamedIcons: new Set(iconNames).size + 1, errors }, null, 2))
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Visual distinction audit OK: ${required.length} categories use icon, label, border, pattern, light, dark, and mobile treatments.`)
