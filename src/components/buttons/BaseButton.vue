<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  text: string;
  styleProps: Record<string, any>;
}>();

const cssStyles = computed(() => {
  return {
    ...props.styleProps,
    color: props.styleProps?.fontColor || "white",
  };
});
</script>

<template>
  <section class="button">
    <button :style="cssStyles">
      <p>{{ text }}</p>
    </button>
  </section>
</template>

<style lang="scss" scoped>
button > p {
  font-size: 16px;
}

section > button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  margin-right: 0.25rem;
  width: calc(100% - 0.25rem);
}
</style>
