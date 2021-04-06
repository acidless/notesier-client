<template>
  <header class="header flex-container content-space-between">
    <nuxt-link class="header__logo" to="/">
      <img src="/imgs/logo.svg" alt="" />
    </nuxt-link>
    <div class="header__actions">
      <HeaderNotAuth v-if="!user" />
      <HeaderAuth :user="user" v-else />
    </div>
  </header>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import HeaderNotAuth from "~/components/Common/Header/HeaderStates/NotAuth/NotAuth.vue";
import HeaderAuth from "~/components/Common/Header/HeaderStates/Auth/Auth.vue";

/*====================*/

export default {
  name: "Header",
  components: { HeaderAuth, HeaderNotAuth },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: var(--color-main-gradient);
  padding: 1em 2em;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);

  a {
    font-size: 2.5rem;

    &.active,
    &:hover {
      text-decoration: underline var(--text-color);
      color: var(--text-color);
    }
  }

  &__logo {
    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 8em;
      height: auto;
    }
  }
}

@media screen and (max-width: 400px) {
  .header {
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    &__logo {
      margin-bottom: 0.5em;
      align-self: center;
    }
  }
}
</style>
