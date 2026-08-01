<script setup lang="ts">defineProps<{ title: string }>()</script>
<template>
  <aside class="visual-reference" :aria-label="title">
    <div class="visual-reference__canvas" aria-hidden="true">
      <span class="visual-reference__bar"></span><span></span><span></span><span></span>
    </div>
    <div class="visual-reference__content">
      <strong>{{ title }}</strong>
      <div class="visual-reference__description"><slot /></div>
      <div class="visual-reference__items"><slot name="items" /></div>
    </div>
  </aside>
</template>
