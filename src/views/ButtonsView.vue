<script setup lang="ts">
import ButtonBarGroup from "../components/buttons/ButtonBarGroup.vue";
</script>

<template>
  <div class="buttons">
    <h1>Buttons</h1>
    <ButtonBarGroup />
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
