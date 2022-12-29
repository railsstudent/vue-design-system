<script setup lang="ts">
import { ref } from "vue";
import ColorPalette from "../components/colors/ColorPalette.vue";

const primaryPalette = ref({
  rgb500: "#1098F7",
  rgb400: "#0059D0",
  rgb300: "#007BE2",
  rgb200: "#0098DC",
  rgb100: "#00B0C6",
});
</script>

<template>
  <div class="color-palette">
    <h1>Color Palettes</h1>
    <ColorPalette name="Primary" :palette="primaryPalette" />
    <ColorPalette name="Seconary" :palette="primaryPalette" />
    <ColorPalette name="Success" :palette="primaryPalette" />
    <ColorPalette name="Information" :palette="primaryPalette" />
    <ColorPalette name="Error" :palette="primaryPalette" />
    <ColorPalette name="Warning" :palette="primaryPalette" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .color-palatte {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
