<script setup lang="ts">
import Message from "./SystemMessage.vue";

defineProps<{
  text: string;
  styleProps: Record<string, any>;
  textStyleProps: Record<string, any>;
}>();
</script>

<template>
  <div class="container">
    <div>
      <h3 class="green">CSS</h3>
      <section>
        <section>
          <p>Div styles</p>
          <ul>
            <li v-for="(value, key) in styleProps" :key="key">
              <span>{{ key }}: {{ value }}</span>
            </li>
          </ul>
        </section>
        <section>
          <p>Text styles</p>
          <ul>
            <li v-for="(value, key) in textStyleProps" :key="key">
              <span>{{ key }}: {{ value }}</span>
            </li>
          </ul>
        </section>
      </section>
    </div>
    <Message
      :text="text"
      :styleProps="styleProps"
      :textStyleProps="textStyleProps"
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

  section {
    flex-basis: 100%;
  }

  div {
    flex-basis: 100%;
    > section {
      display: flex;
    }
  }
}

@media (min-width: 1024px) {
  div.container {
    margin-bottom: 0;
  }
}
</style>
