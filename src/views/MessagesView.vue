<script setup lang="ts">
import InvertedButtonBarGroup from "../components/buttons/InvertedButtonBarGroup.vue";
</script>

<template>
  <div class="buttons">
    <h1>Inverted Buttons</h1>
    <InvertedButtonBarGroup />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .buttons {
    min-height: 70vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > * {
      flex-basis: 100%;
    }
  }
}
</style>
