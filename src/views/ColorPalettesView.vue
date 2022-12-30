<script setup lang="ts">
import { ref } from "vue";
import ColorPalette from "../components/colors/ColorPalette.vue";

const primaryPalette = ref({
  rgb500: "#19072c",
  rgb400: "#4a1485",
  rgb300: "#7b22dd",
  rgb200: "#b07aeb",
  rgb100: "#e5d3f8",
});

const secondaryPalette = ref({
  rgb500: "#330011",
  rgb400: "#990033",
  rgb300: "#ff0055",
  rgb200: "#ff6699",
  rgb100: "#ffccdd",
});

const successPalette = ref({
  rgb500: "#0b1028",
  rgb400: "#213178",
  rgb300: "#3651c9",
  rgb200: "#8797de",
  rgb100: "#d7dcf4",
});

const informationPalette = ref({
  rgb500: "#156d78",
  rgb400: "#1e99a9",
  rgb300: "#26c5d9",
  rgb200: "#56d2e1",
  rgb100: "#86dfea",
});

const errorPalette = ref({
  rgb500: "#b8360e",
  rgb400: "#ed4612",
  rgb300: "#f16f47",
  rgb200: "#f5987b",
  rgb100: "#f9c1b0",
});

const warningPalette = ref({
  rgb500: "#fbda04",
  rgb400: "#fce132",
  rgb300: "#fce75f",
  rgb200: "#fdee8d",
  rgb100: "#fef5bb",
});
</script>

<template>
  <div class="color-palette">
    <h1>Color Palettes</h1>
    <ColorPalette description="Primary" :palette="primaryPalette" />
    <ColorPalette description="Seconary" :palette="secondaryPalette" />
    <ColorPalette description="Success" :palette="successPalette" />
    <ColorPalette description="Information" :palette="informationPalette" />
    <ColorPalette description="Error" :palette="errorPalette" />
    <ColorPalette
      description="Warning"
      :palette="warningPalette"
      fontColor="black"
    />
  </div>
</template>

<style lang="scss" scoped>
.color-palette {
  min-height: 70vh;
}

@media (min-width: 1024px) {
  .color-palette {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > * {
      flex-basis: 100%;
    }
  }
}
</style>
