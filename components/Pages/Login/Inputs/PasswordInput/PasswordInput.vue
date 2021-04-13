<template>
  <Input
    :type="isVisible ? 'text' : 'password'"
    class="line"
    :validate="validatePassword"
    :placeholder="placeholder || 'Пароль'"
    :name="name || 'password'"
  >
    <button type="button" @click="isVisible = !isVisible" class="default-btn content" slot="content">
      <span class="material-icons">{{ isVisible ? "visibility_off" : "visibility" }}</span>
    </button>
  </Input>
</template>

<script>
import runValidators from "../../../../../utils/Validators/runValidators";
import { maxLength, minLength, required } from "@/utils/Validators/validators";
import Input from "../../../../Common/Form/Input/Input";

/*====================*/

export default {
  name: "PasswordInput",
  components: { Input },
  props: {
    name: String,
    placeholder: String
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    validatePassword(value) {
      return runValidators(value, [required, minLength(8), maxLength(32)]);
    }
  }
};
</script>
