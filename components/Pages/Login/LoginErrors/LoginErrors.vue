<template>
  <div class="errors">
    <div class="errors__error" v-for="error in errors">
      <p class="text--bright">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginErrors",
  props: {
    errors: Array
  }
};
</script>

<style lang="scss" scoped>
.errors {
  background: var(--red);
  margin-bottom: 2em;
  padding: 1em;
  border-radius: 0.5em;

  &__error {
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }
}
</style>
