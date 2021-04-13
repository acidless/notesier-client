<template>
  <div class="profile-data-item flex-container content-space-between align-items-center">
    <div class="flex-container align-items-center profile-data-item__key">
      <span class="material-icons">
        {{ keyIcon }}
      </span>
      <div>
        <p class="text--main bold">{{ dataKey }}:</p>
      </div>
    </div>
    <div class="flex-container align-items-center profile-data-item__value">
      <p>{{ dataValue }}</p>
      <button @click="isEditMode = true" class="default-btn profile-data-item__edit animated-icon">
        <span class="material-icons">
          create
        </span>
      </button>
    </div>
    <ProfileDataItemForm :on-submit="onSave" :set-active="setEditMode" :is-active="isEditMode">
      <slot name="content" slot="content"></slot>
    </ProfileDataItemForm>
  </div>
</template>

<script>
/*====================*/

import MessageWindow from "@/components/Common/MessageWindow/MessageWindow";
import ProfileDataItemForm from "@/components/Pages/Profile/ProfileDataItems/ProfileDataItem/ProfileDataItemForm/ProfileDataItemForm";

/*====================*/

export default {
  name: "ProfileDataItem",
  components: { ProfileDataItemForm, MessageWindow },
  props: {
    keyIcon: String,
    dataKey: String,
    dataValue: String,
    onSave: Function
  },
  data() {
    return {
      isEditMode: false
    };
  },
  methods: {
    setEditMode(value) {
      this.$data.isEditMode = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.profile-data-item {
  &__key,
  &__value {
    .material-icons {
      font-size: 2.25rem !important;
    }
  }

  &__key {
    .material-icons {
      margin-right: 0.15em;
    }
  }

  &__value {
    .profile-data-item__edit {
      margin-left: 0.15em;
    }
  }
}
</style>
