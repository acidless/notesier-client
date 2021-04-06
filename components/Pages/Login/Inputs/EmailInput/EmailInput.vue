<template>
  <Input class="line" :validate="validateEmail" placeholder="Почта" type="text" name="email" />
</template>

<script>
import runValidators from "../../../../../utils/Validators/runValidators";
import { required } from "../../../../../utils/Validators/validators";
import Input from "../../../../Common/Form/Input/Input";

/*====================*/

export default {
  name: "EmailInput",
  components: { Input },
  methods: {
    validateEmail(value) {
      return runValidators(value, [required]);
    }
  }
};
</script>
