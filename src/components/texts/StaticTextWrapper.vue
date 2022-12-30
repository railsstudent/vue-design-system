<script setup lang="ts">
import { computed } from "vue";
import StaticText from "./StaticText.vue";

const props = defineProps<{
  text: string;
  textStyleProps: Record<string, any>;
}>();

const borderCss = computed(() => {
  const cssStyles = Object.entries(props.textStyleProps).reduce((acc, obj) => {
    const [key, value] = obj;
    return acc + `${key}: ${value}, `;
  }, "");

  return cssStyles.substring(0, cssStyles.lastIndexOf(","));
});
</script>

<template>
  <div class="container">
    <StaticText :text="text" :textStyleProps="textStyleProps" />
    <section>
      <p>{{ borderCss }}</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
div {
  .container {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 1rem;

    section:first-child {
      flex-basis: 85%;
    }

    section:nth-child(2) {
      flex-basis: 15%;
    }
  }
}

@media (min-width: 1024px) {
  div.container {
    margin-bottom: 0;
  }
}
</style>
