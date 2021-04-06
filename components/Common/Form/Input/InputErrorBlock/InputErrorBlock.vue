<template>
  <div>
    <InputErrorButton v-on:errorClick="isErrorShowing = true" />
    <div v-bind:class="{ active: isErrorShowing }" class="error-block">
      {{ error }}
    </div>
  </div>
</template>
<script>
import InputErrorButton from "./InputErrorButton/InputErrorButton";

/*====================*/

export default {
  name: "InputErrorBlock",
  components: { InputErrorButton },
  props: {
    error: String
  },
  data() {
    return {
      isErrorShowing: false,
      timeout: null
    };
  },
  watch: {
    isErrorShowing() {
      let { timeout, isErrorShowing } = this.$data;
      clearTimeout(timeout);

      if (isErrorShowing) {
        timeout = setTimeout(() => {
          this.$data.isErrorShowing = false;
        }, 2500);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../../assets/sass/core/mixins";

.error-block {
  position: absolute;
  bottom: 105%;
  left: 0;
  background: var(--color-main-hover);
  padding: 0.25em 0.5em;
  font-weight: 400;
  color: var(--text-color);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s all ease;
  font-size: 1.5em;
  width: max-content;

  &.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
