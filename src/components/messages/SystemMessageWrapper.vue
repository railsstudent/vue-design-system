<script setup lang="ts">
import { computed } from "vue";
import Message from "./SystemMessage.vue";

const props = defineProps<{
  text: string;
  styleProps: Record<string, any>;
  textStyleProps: Record<string, any>;
}>();

const allStyles = computed(() => buildString(props.styleProps));
const allTextStyles = computed(() => buildString(props.textStyleProps));

function buildString(props: Record<string, any>) {
  const cssStyles = Object.entries(props).reduce((acc, obj) => {
    const [key, value] = obj;
    return acc + `${key}: "${value}", `;
  }, "");

  return cssStyles.substring(0, cssStyles.lastIndexOf(","));
}

</script>

<template>
  <div class="container">
    <div>
      <h3 class="green">CSS styles</h3>
      <section>
        <section>
          <p>Div styles: {{ allStyles }}</p>
          <p>Text styles: {{ allTextStyles }}</p>
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
    padding-left: 1rem;
    padding-right: 1rem;
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
