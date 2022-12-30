<script setup lang="ts">
defineProps<{
  text: string;
  textStyleProps: Record<string, any>;
}>();
</script>

<template>
  <section class="message">
    <p :style="textStyleProps">{{ text }}</p>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 0.5rem;
}
</style>
