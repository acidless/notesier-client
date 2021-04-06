<template>
  <form @submit="submit" ref="form">
    <slot name="content"></slot>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    onSubmit: Function
  },
  data() {
    return {
      inputWrappers: []
    };
  },
  mounted() {
    this.$data.inputWrappers = [...this.$refs.form.querySelectorAll(".input-wrapper")];
  },
  methods: {
    submit(e) {
      e.preventDefault();

      const inputWrappers = this.$data.inputWrappers;
      const values = {};

      if (
        inputWrappers.every((inputWrapper, i) => {
          const input = inputWrapper.querySelector(".input-wrapper__input");

          if (input.classList.contains("error")) {
            return false;
          }

          values[input.name] = input.value;
          return true;
        })
      ) {
        this.$props.onSubmit(values);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/sass/core/mixins";

form {
  animation: GoFromLeft 0.5s linear, FadeIn 0.5s linear;
  min-width: 40em;
  padding: 2em;
  border-radius: 1em;
  background: var(--color-main);
  box-shadow: 13px 13px 10px -12px var(--paragraph-color);

  h2 {
    @include volumeric-shadow(lightgray);
  }
}
</style>
