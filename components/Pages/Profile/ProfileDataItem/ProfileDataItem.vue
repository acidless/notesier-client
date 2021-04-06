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
      <button class="default-btn profile-data-item__edit animated-icon">
        <span class="material-icons">
          create
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileDataItem",
  props: {
    keyIcon: String,
    dataKey: String,
    dataValue: String
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
