<template>
  <ProfileDataItem :on-save="onSave" key-icon="account_circle" data-key="Логин" :data-value="user ? user.name : ''">
    <Input class="line" slot="content" name="name" type="text" placeholder="Новое имя" />
  </ProfileDataItem>
</template>

<script>
import ProfileDataItem from "@/components/Pages/Profile/ProfileDataItems/ProfileDataItem/ProfileDataItem";
import Input from "@/components/Common/Form/Input/Input";
export default {
  name: "EditName",
  components: { Input, ProfileDataItem },
  props: {
    user: Object,
    onSave: Function
  }
};
</script>
