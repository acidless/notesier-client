<template>
  <div
    @click="onClose"
    ref="messageWindow"
    :class="{ active: isActive }"
    class="message-window flex-container content-center align-items-center"
  >
    <div class="message-window__inner">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageWindow",
  props: {
    isActive: Boolean,
    setActive: Function
  },
  methods: {
    onClose(e) {
      e.stopPropagation();
      if (e.target === this.$refs.messageWindow) {
        this.$props.setActive && this.$props.setActive(false);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.message-window {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s opacity ease-in-out;

  &.active {
    opacity: 1;
    pointer-events: auto;

    .message-window__inner {
      transform: scale(1);
    }
  }

  &__inner {
    min-width: 30em;
    background: var(--color-main);
    border-radius: 1em;
    transform: scale(0.7);
    transition: 0.3s transform ease-in-out;
  }
}
</style>
