<template>
  <Input class="line" :validate="validateName" placeholder="Логин" type="text" name="name" />
</template>

<script>
import runValidators from "../../../../../utils/Validators/runValidators";
import { maxLength, minLength, required } from "../../../../../utils/Validators/validators";
import Input from "../../../../Common/Form/Input/Input";

/*====================*/

export default {
  name: "LoginInput",
  components: { Input },
  methods: {
    validateName(value) {
      return runValidators(value, [required, minLength(6), maxLength(16)]);
    }
  }
};
</script>
