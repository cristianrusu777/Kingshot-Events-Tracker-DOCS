<script setup lang="ts">
import CategoryIcon from './CategoryIcon.vue'
defineProps<{ category: string; icon?: string; eyebrow: string; title: string }>()
</script>
<template>
  <section class="category-hero" :data-category="category" :aria-label="`${title} category introduction`">
    <div class="category-hero__icon"><CategoryIcon :category="category" size="large" /></div>
    <div>
      <p class="category-hero__eyebrow">{{ eyebrow }}</p>
      <div class="category-hero__description"><slot /></div>
      <span class="category-hero__label">{{ category.replaceAll('-', ' ') }}</span>
    </div>
  </section>
</template>
