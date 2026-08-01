<script setup lang="ts">
defineProps<{ category: string; icon: string; eyebrow: string; title: string }>()
</script>

<template>
  <section class="category-hero" :data-category="category" :aria-label="`${title} category introduction`">
    <div class="category-hero__icon" aria-hidden="true">
      <svg viewBox="0 0 48 48" role="img">
        <path class="category-hero__frame" d="M24 3 43 14v20L24 45 5 34V14Z" />
        <path v-if="icon === 'compass'" d="m30 18-4 8-8 4 4-8Z" />
        <path v-else-if="icon === 'shield'" d="M24 10 35 14v9c0 8-5 13-11 16-6-3-11-8-11-16v-9Zm0 8v12m-4-6h8" />
        <path v-else-if="icon === 'network'" d="M24 12v9M12 34h24M12 27v7m12-13-12 6m12-6 12 6m0 0v7m-15-1h6" />
        <path v-else-if="icon === 'people'" d="M18 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm12 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM9 36c1-7 5-10 9-10s8 3 9 10m0-8c5 0 8 3 9 8" />
        <path v-else-if="icon === 'flag'" d="M15 38V10m0 3h19l-5 7 5 7H15" />
        <path v-else-if="icon === 'upload'" d="M12 33v5h24v-5M24 33V11m-8 9 8-9 8 9M15 27h18" />
        <path v-else-if="icon === 'chart'" d="M11 36h26M15 32V22h6v10m3 0V14h6v18m3 0v-6h4" />
        <path v-else-if="icon === 'crown'" d="m10 18 8 7 6-13 6 13 8-7-3 18H13Zm4 13h20" />
        <path v-else-if="icon === 'book'" d="M9 13c7-2 12 0 15 4v22c-3-4-8-6-15-4Zm30 0c-7-2-12 0-15 4v22c3-4 8-6 15-4Z" />
        <path v-else-if="icon === 'flask'" d="M18 10h12m-9 0v10L12 36c-1 2 1 3 3 3h18c2 0 4-1 3-3l-9-16V10m-10 20h14" />
        <path v-else-if="icon === 'layers'" d="m24 10 16 8-16 8-16-8Zm-14 15 14 7 14-7M10 32l14 7 14-7" />
        <path v-else-if="icon === 'cycle'" d="M35 17a13 13 0 0 0-22 4m0 0-1-8m1 8 8-1m-8 11a13 13 0 0 0 22-4m0 0 1 8m-1-8-8 1" />
        <path v-else d="M24 10a14 14 0 1 0 0 28 14 14 0 0 0 0-28Zm0 8v8m0 5v1" />
      </svg>
    </div>
    <div>
      <p class="category-hero__eyebrow">{{ eyebrow }}</p>
      <div class="category-hero__description"><slot /></div>
      <span class="category-hero__label">{{ category.replaceAll('-', ' ') }}</span>
    </div>
  </section>
</template>
