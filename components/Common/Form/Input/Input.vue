<template>
  <div v-bind:class="{ error: error && touched }" class="relative input-wrapper">
    <slot name="content"></slot>
    <input
      class="input-wrapper__input"
      @input="validateInput"
      @focusout="validateInput"
      v-model="value"
      :placeholder="placeholder"
      :type="type"
      :name="name"
    />
    <InputErrorBlock v-if="error" :error="error" />
  </div>
</template>

<script>
import InputErrorBlock from "./InputErrorBlock/InputErrorBlock";

/*====================*/

export default {
  name: "Input",
  components: { InputErrorBlock },
  props: {
    name: String,
    type: String,
    placeholder: String,
    validate: Function
  },
  data() {
    return {
      value: "",
      error: undefined,
      touched: false
    };
  },
  methods: {
    validateInput({ target: { value } }) {
      this.$data.touched = true;

      let validate = this.$props.validate;
      if (validate) {
        this.$data.error = validate(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  width: 100%;

  .content {
    position: absolute;
    right: 0.5em;
    top: 50%;
    transform: translateY(-50%);
  }

  &.error input {
    padding-left: 2em;
    border-color: var(--red);
  }

  &.padding input {
    padding-right: 2.5em;
  }
}
</style>
