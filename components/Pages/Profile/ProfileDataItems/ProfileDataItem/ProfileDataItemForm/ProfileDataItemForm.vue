<template>
  <MessageWindow :set-active="setActive" :is-active="isActive"
    ><div slot="content">
      <Form :on-submit="onSubmit">
        <div slot="content">
          <PasswordInput name="currentPassword" /><slot name="content"></slot>
          <button class="button--light" type="submit">Сохранить</button>
        </div>
      </Form>
    </div></MessageWindow
  >
</template>

<script>
import Form from "@/components/Common/Form/Form";
import Input from "@/components/Common/Form/Input/Input";
import PasswordInput from "@/components/Pages/Login/Inputs/PasswordInput/PasswordInput";
import MessageWindow from "@/components/Common/MessageWindow/MessageWindow";

/*====================*/

export default {
  name: "ProfileDataItemForm",
  components: { MessageWindow, PasswordInput, Input, Form },
  props: {
    setActive: Function,
    isActive: Boolean,
    onSubmit: Function
  }
};
</script>

<style lang="scss" scoped>
button {
  margin: 0 auto;
}
</style>
