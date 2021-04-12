<template>
  <div class="profile container">
    <div class="block">
      <h3 class="block__title">Данные аккаунта</h3>
      <div class="profile__data">
        <ProfileDataItem key-icon="account_circle" data-key="Логин" :data-value="user ? user.name : ''" />
        <ProfileDataItem key-icon="lock" data-key="Пароль" data-value="*********" />
      </div>
    </div>

    <ProfileLogout />
  </div>
</template>

<script>
import ProfileDataItem from "../../components/Pages/Profile/ProfileDataItem/ProfileDataItem";
import { mapGetters } from "vuex";
import ProfileLogout from "@/components/Pages/Profile/ProfileLogout/ProfileLogout";

/*====================*/

export default {
  name: "Profile",
  components: { ProfileLogout, ProfileDataItem },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  watch: {
    user() {
      if (!this.user) {
        this.$router.push("/login");
      }
    }
  }
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
