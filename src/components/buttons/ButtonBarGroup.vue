<script setup lang="ts">
import { ref } from "vue";
import ButtonBar from "./ButtonBar.vue";

const primaryColors = ref([
  "#19072c",
  "#4a1485",
  "#7b22dd",
  "#b07aeb",
  "#e5d3f8",
]);

const secondaryColors = ref([
  "#330011",
  "#990033",
  "#ff0055",
  "#ff6699",
  "#ffccdd",
]);

const disabledColors = ref([
  "#4d5155",
  "#63686e",
  "#798086",
  "#91979c",
  "#aaaeb2",
]);

const successColors = ref([
  "#0b1028",
  "#213178",
  "#3651c9",
  "#8797de",
  "#d7dcf4",
]);

const informationColors = ref([
  "#156d78",
  "#1e99a9",
  "#26c5d9",
  "#56d2e1",
  "#86dfea",
]);

const errorColors = ref([
  "#b8360e",
  "#ed4612",
  "#f16f47",
  "#f5987b",
  "#f9c1b0",
]);

const warningColors = ref([
  "#fbda04",
  "#fce132",
  "#fce75f",
  "#fdee8d",
  "#fef5bb",
]);
</script>

<template>
  <div class="groups">
    <ButtonBar
      class="bar"
      description="Primary"
      :backgroundColors="primaryColors"
      text="Primary"
    />
    <ButtonBar
      class="bar"
      description="Seconary"
      :backgroundColors="secondaryColors"
      text="Secondary"
    />
    <ButtonBar
      class="bar"
      description="Disabled"
      :backgroundColors="disabledColors"
      text="Disabled"
    />
    <ButtonBar
      class="bar"
      description="Success"
      :backgroundColors="successColors"
      text="Success"
    />
    <ButtonBar
      class="bar"
      description="Information"
      :backgroundColors="informationColors"
      text="Info"
    />
    <ButtonBar
      class="bar"
      description="Error"
      :backgroundColors="errorColors"
      text="Error"
    />
    <ButtonBar
      class="bar"
      description="Warning"
      :backgroundColors="warningColors"
      text="Warn"
      fontColor="#000000"
    />
  </div>
</template>

<style lang="scss" scoped>
.groups {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: calc(100% - 60px);
}

.bar {
  flex-basis: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}
</style>
