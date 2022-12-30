<script setup lang="ts">
import SingleButton from "./BaseButton.vue";

defineProps<{
  description: string;
  text: string;
  fontColors: string[];
}>();

const createStyleProps = (fontColor: string) => ({
  "background-color": "white",
  fontColor,
  border: `1px solid ${fontColor}`,
});
</script>

<template>
  <div class="container">
    <h3 class="green">{{ description }}</h3>
    <SingleButton
      class="single-button"
      v-for="(fontColor, index) in fontColors"
      :key="index"
      :text="text"
      :styleProps="createStyleProps(fontColor)"
    />
  </div>
</template>

<style lang="scss" scoped>
div {
  .container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  h3 {
    flex-basis: 15%;
  }

  section.single-button {
    flex-basis: 15%;
  }
}

@media (min-width: 1024px) {
  div.container {
    margin-bottom: 0;
  }
}
</style>
