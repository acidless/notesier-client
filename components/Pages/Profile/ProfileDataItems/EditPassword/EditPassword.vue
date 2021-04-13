<template>
  <ProfileDataItem :on-save="onSave" key-icon="lock" data-key="Пароль" data-value="*********">
    <PasswordInput slot="content" placeholder="Новый пароль" name="password" />
  </ProfileDataItem>
</template>

<script>
import ProfileDataItem from "@/components/Pages/Profile/ProfileDataItems/ProfileDataItem/ProfileDataItem";
import Input from "@/components/Common/Form/Input/Input";
import PasswordInput from "@/components/Pages/Login/Inputs/PasswordInput/PasswordInput";
export default {
  name: "EditPassword",
  components: { PasswordInput, Input, ProfileDataItem },
  props: {
    user: Object,
    onSave: Function
  }
};
</script>
