<template>
  <nuxt-link to="/profile" class="default-btn flex-container profile-button">
    <span class="material-icons text--bright">
      account_circle
    </span>
    <p class="text--bright">{{ user.name }}</p>
  </nuxt-link>
</template>

<script>
export default {
  name: "HeaderAuth",
  props: {
    user: Object
  }
};
</script>

<style lang="scss" scoped>
.profile-button {
  text-decoration: none !important;
}

.material-icons {
  font-size: 4rem !important;
  margin-right: 0.25em;
}
</style>
