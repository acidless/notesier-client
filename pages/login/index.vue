<template>
  <div class="full-size-block flex-container content-center column">
    <LoginErrors v-if="errors.length" :errors="errors" />
    <Form class="line" :on-submit="onSubmit">
      <div slot="content">
        <div class="line">
          <h2 class="text--bright">Вход</h2>
        </div>
        <LoginInput />
        <PasswordInput />
        <div class="flex-container content-center">
          <button class="button--light align-center" type="submit">Войти</button>
        </div>
      </div>
    </Form>
    <p>Нет аккаунта? <nuxt-link to="/register">Регистрация</nuxt-link></p>
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import Form from "../../components/Common/Form/Form";
import Input from "../../components/Common/Form/Input/Input";
import LoginInput from "../../components/Pages/Login/Inputs/LoginInput/LoginInput";
import PasswordInput from "../../components/Pages/Login/Inputs/PasswordInput/PasswordInput";
import LoginErrors from "../../components/Pages/Login/LoginErrors/LoginErrors";
import { mapGetters } from "vuex";
import Loader from "../../components/Common/Loader/Loader";

/*====================*/

export default {
  name: "Login",
  components: { Loader, LoginErrors, PasswordInput, LoginInput, Input, Form },
  methods: {
    onSubmit(values) {
      this.$store.dispatch("login", values);
    }
  },
  computed: {
    ...mapGetters({
      errors: "getErrors",
      user: "getUser",
      isLoading: "getLoadingStatus"
    })
  },
  watch: {
    user() {
      if (this.user) {
        this.$router.push("/");
      }
    }
  }
};
</script>
