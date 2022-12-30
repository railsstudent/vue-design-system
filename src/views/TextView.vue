<script setup lang="ts">
import MessageWrapper from "../components/messages/SystemMessageWrapper.vue";

const primaryStyles = {
  "background-color": "#7b22dd",
  padding: "1rem 0.5rem",
  border: "3px solid #4a1485",
};

const textStyles = {
  color: "white",
  "font-size": "1rem",
};

const secondaryStyles = {
  "background-color": "#ff0055",
  padding: "1rem 0.5rem",
  border: "3px solid #990033",
};

const successStyles = {
  "background-color": "#3651c9",
  padding: "1rem 0.5rem",
  border: "3px solid #213178",
};

const infoStyles = {
  "background-color": "#26c5d9",
  padding: "1rem 0.5rem",
  border: "3px solid #1e99a9",
};

const errorStyles = {
  "background-color": "#ed4612",
  padding: "1rem 0.5rem",
  border: "3px solid #b8360e",
};

const warningStyles = {
  "background-color": "#fce132",
  padding: "1rem 0.5rem",
  border: "3px solid #fbda04",
};

const warningTextStyles = { ...textStyles, color: "black" };
</script>

<template>
  <div class="messages">
    <h1>Texts</h1>
    <MessageWrapper
      text="This is a primary message."
      :styleProps="primaryStyles"
      :textStyleProps="textStyles"
    />
    <MessageWrapper
      text="This is a secondary message."
      :styleProps="secondaryStyles"
      :textStyleProps="textStyles"
    />
    <MessageWrapper
      text="This is a success message."
      :styleProps="successStyles"
      :textStyleProps="textStyles"
    />
    <MessageWrapper
      text="This is a information message."
      :styleProps="infoStyles"
      :textStyleProps="textStyles"
    />
    <MessageWrapper
      text="This is a error message."
      :styleProps="errorStyles"
      :textStyleProps="textStyles"
    />
    <MessageWrapper
      text="This is a warning message."
      :styleProps="warningStyles"
      :textStyleProps="warningTextStyles"
    />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}

@media (min-width: 1024px) {
  .messages {
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
