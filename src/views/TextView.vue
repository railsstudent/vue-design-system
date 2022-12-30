<script setup lang="ts">
import StaticTextWrapper from "../components/texts/StaticTextWrapper.vue";

const veryLargeStyles = {
  color: "#4a4a4a",
  "font-size": "3rem",
};
const largeStyles = { ...veryLargeStyles, "font-size": "2.25rem" };
const mediumStyles = { ...veryLargeStyles, "font-size": "1.5rem" };
const smallStyles = { ...veryLargeStyles, "font-size": "1.25rem" };
const verySmallStyles = { ...veryLargeStyles, "font-size": "1rem" };

const veryLargeItalicStyles = { ...veryLargeStyles, "font-style": "italic" };
const largeItalicStyles = { ...largeStyles, "font-style": "italic" };
const mediumItalicStyles = { ...mediumStyles, "font-style": "italic" };
const smallItalicStyles = { ...smallStyles, "font-style": "italic" };
const verySmallItalicStyles = { ...verySmallStyles, "font-style": "italic" };

const veryLargeBoldStyles = { ...veryLargeStyles, "font-weight": "bold" };
const largeBoldStyles = { ...largeStyles, "font-weight": "bold" };
const mediumBoldStyles = { ...mediumStyles, "font-weight": "bold" };
const smallBoldStyles = { ...smallStyles, "font-weight": "bold" };
const verySmallBoldStyles = { ...verySmallStyles, "font-weight": "bold" };

const veryLargeBoldItalicStyles = {
  ...veryLargeBoldStyles,
  "font-style": "italic",
};
const largeBoldItalicStyles = { ...largeBoldStyles, "font-style": "italic" };
const mediumBoldItalicStyles = { ...mediumBoldStyles, "font-style": "italic" };
const smallBoldItalicStyles = { ...smallBoldStyles, "font-style": "italic" };
const verySmallBoldItalicStyles = {
  ...verySmallBoldStyles,
  "font-style": "italic",
};

const text = "Lorem ipsum labore magna aliqua.";
</script>

<template>
  <div class="messages">
    <h1>Texts</h1>
    <StaticTextWrapper :text="text" :textStyleProps="veryLargeStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="largeStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="mediumStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="smallStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="verySmallStyles" />

    <StaticTextWrapper :text="text" :textStyleProps="veryLargeItalicStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="largeItalicStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="mediumItalicStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="smallItalicStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="verySmallItalicStyles" />

    <StaticTextWrapper :text="text" :textStyleProps="veryLargeBoldStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="largeBoldStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="mediumBoldStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="smallBoldStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="verySmallBoldStyles" />

    <StaticTextWrapper
      :text="text"
      :textStyleProps="veryLargeBoldItalicStyles"
    />
    <StaticTextWrapper :text="text" :textStyleProps="largeBoldItalicStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="mediumBoldItalicStyles" />
    <StaticTextWrapper :text="text" :textStyleProps="smallBoldItalicStyles" />
    <StaticTextWrapper
      :text="text"
      :textStyleProps="verySmallBoldItalicStyles"
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
