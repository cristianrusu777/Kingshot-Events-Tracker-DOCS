<script setup lang="ts">
import CategoryIcon from './CategoryIcon.vue'
import { categoryFromPath } from '../../category-icons.mts'
defineProps<{ items: Array<{ title: string; description: string; href: string }> }>()
</script>
<template>
  <div class="link-grid">
    <a v-for="item in items" :key="item.href" :href="item.href" class="link-card" :data-category="item.href.split('/')[2] || 'portal'">
      <CategoryIcon :category="categoryFromPath(item.href)" size="small" />
      <strong>{{ item.title }}</strong><span>{{ item.description }}</span><em aria-hidden="true">Explore →</em>
    </a>
  </div>
</template>
