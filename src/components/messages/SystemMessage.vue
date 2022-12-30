<script setup lang="ts">
defineProps<{
  text: string;
  styleProps: Record<string, any>;
  textStyleProps: Record<string, any>;
}>();
</script>

<template>
  <section class="message">
    <div :style="styleProps">
      <p :style="textStyleProps">{{ text }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section.message {
  padding: 0.5rem 1rem;
  font-size: 1rem;

  div {
    flex-grow: 1;
  }
}
</style>
