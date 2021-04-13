<template>
  <div class="full-size-block">
    <div class="profile container ">
      <div class="block">
        <h3 class="block__title">Данные аккаунта</h3>
        <div class="profile__data">
          <EditName :on-save="onFieldSave" :user="user" />
          <EditPassword :on-save="onFieldSave" />
        </div>
      </div>

      <ProfileLogout />
    </div>
  </div>
</template>

<script>
import ProfileDataItem from "../../components/Pages/Profile/ProfileDataItems/ProfileDataItem/ProfileDataItem";
import { mapGetters } from "vuex";
import ProfileLogout from "@/components/Pages/Profile/ProfileLogout/ProfileLogout";
import EditName from "@/components/Pages/Profile/ProfileDataItems/EditName/EditName";
import EditPassword from "@/components/Pages/Profile/ProfileDataItems/EditPassword/EditPassword";

/*====================*/

export default {
  name: "Profile",
  components: { EditPassword, EditName, ProfileLogout, ProfileDataItem },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    onFieldSave(data) {
      this.$store.dispatch("updateUser", data);
    }
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
