import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PlatformSelector from './components/PlatformSelector.vue'
import PortalHero from './components/PortalHero.vue'
import RolePerspective from './components/RolePerspective.vue'
import VisualReference from './components/VisualReference.vue'
import LinkGrid from './components/LinkGrid.vue'
import CategoryHero from './components/CategoryHero.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PlatformSelector', PlatformSelector)
    app.component('PortalHero', PortalHero)
    app.component('RolePerspective', RolePerspective)
    app.component('VisualReference', VisualReference)
    app.component('LinkGrid', LinkGrid)
    app.component('CategoryHero', CategoryHero)
  }
} satisfies Theme
