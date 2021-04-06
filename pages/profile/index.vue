<template>
  <div class="profile container">
    <div class="block">
      <h3 class="block__title">Данные аккаунта</h3>
      <div class="profile__data">
        <ProfileDataItem key-icon="account_circle" data-key="Логин" :data-value="user ? user.name : ''" />
        <ProfileDataItem key-icon="lock" data-key="Пароль" data-value="*********" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProfileDataItem from "../../components/Pages/Profile/ProfileDataItem/ProfileDataItem";

/*====================*/

export default {
  name: "Profile",
  components: { ProfileDataItem },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },

  beforeUpdate() {}
};
</script>

<style lang="scss" scoped>
.profile {
  &__name {
    font-family: "Montserrat", sans-serif;
    font-size: 2.5rem;
    margin-left: 0.25em;
  }

  &__data {
    width: 100%;
    max-width: 25em;

    > div:not(:last-child) {
      margin-bottom: 1.5em;
    }
  }
}
</style>
