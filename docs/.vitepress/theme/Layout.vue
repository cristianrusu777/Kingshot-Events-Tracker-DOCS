<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'
import { useData } from 'vitepress'
import { publishedPages } from '../publication-manifest.mts'

const { page } = useData()
const record = computed(() => publishedPages.find((item: any) => item.file === page.value.relativePath))
const category = computed(() => {
  const value = record.value?.navigationSection ?? ''
  if (value === 'Kingdoms and Alliances') return 'Scopes and Communities'
  if (value === 'Subscriptions') return 'Subscriptions and Usage'
  return value
})
const categoryPath = computed(() => {
  const path = record.value?.path ?? ''
  const parts = path.split('/').filter(Boolean)
  return parts.length > 1 ? `/kingshot-events/${parts[1]}/` : '/kingshot-events/'
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <div v-if="record?.product === 'kingshot-events'" class="page-context" :data-category="category">
        <nav class="docs-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Ralyvora Docs</a><span aria-hidden="true">/</span>
          <a href="/kingshot-events/">Kingshot Events</a><span aria-hidden="true">/</span>
          <a :href="categoryPath">{{ category }}</a><span aria-hidden="true">/</span>
          <span aria-current="page">{{ record.title }}</span>
        </nav>
        <div class="page-context__badges" aria-label="Guide metadata">
          <span class="page-context__category"><i aria-hidden="true"></i>{{ category }}</span>
          <span>{{ record.audience }}</span>
          <span>{{ record.experienceLevel }}</span>
          <span>{{ /troubleshooting/.test(record.path) ? 'Troubleshooting' : /role-journeys/.test(record.path) ? 'Role journey' : 'Product guide' }}</span>
        </div>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
