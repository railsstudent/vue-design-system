<script setup lang="ts">
defineProps<{
  name: string;
  palette: {
    rgb100: string;
    rgb200: string;
    rgb300: string;
    rgb400: string;
    rgb500: string;
  };
  fontColor?: string;
}>();
</script>

<template>
  <div class="container">
    <h3 class="green">{{ name }}</h3>
    <section class="palette">
      <div
        :style="{
          'background-color': palette.rgb500,
          color: fontColor || 'white',
        }"
      >
        {{ palette.rgb500 }}
      </div>
      <div
        :style="{
          'background-color': palette.rgb400,
          color: fontColor || 'white',
        }"
      >
        {{ palette.rgb400 }}
      </div>
      <div
        :style="{
          'background-color': palette.rgb300,
          color: fontColor || 'white',
        }"
      >
        {{ palette.rgb300 }}
      </div>
      <div
        :style="{
          'background-color': palette.rgb200,
          color: fontColor || 'white',
        }"
      >
        {{ palette.rgb200 }}
      </div>
      <div
        :style="{
          'background-color': palette.rgb100,
          color: fontColor || 'white',
        }"
      >
        {{ palette.rgb100 }}
      </div>
    </section>
  </div>
</template>

<style scoped>
div.container {
  margin-top: 2rem;
  display: flex;
}

h3 {
  flex-basis: 20%;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-right: 1rem;
}

section.palette {
  display: flex;
}

section.palette > div {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  color: white;
}
</style>
