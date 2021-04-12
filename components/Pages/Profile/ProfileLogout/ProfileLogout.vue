<template>
  <button @click="onLogout" class="profile__logout flex-container align-items-center">
    <span>Выйти</span><span class="material-icons text--bright"> logout </span>
  </button>
</template>

<script>
export default {
  name: "ProfileLogout",
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.profile__logout {
  span {
    font-size: 2.5rem;

    &:not(:last-child) {
      margin-right: 0.25em;
    }
  }
}
</style>
