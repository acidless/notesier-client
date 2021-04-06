<template>
  <button @click="$emit('errorClick')" type="button" class="default-btn flex-container error-button">
    <span class="material-icons">error_outline</span>
  </button>
</template>

<script>
export default {
  name: "InputErrorButton"
};
</script>

<style lang="scss" scoped>
.error-button {
  position: absolute;
  top: 50%;
  left: 0.25em;
  transform: translateY(-50%);
  display: flex;
  align-items: center;

  span {
    font-size: 3rem;
    color: var(--red);
  }
}
</style>
