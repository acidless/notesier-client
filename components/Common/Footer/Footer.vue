<template>
  <footer class="footer flex-container content-space-between">
    <p class="text--bright">Copyright &copy; 2021 | RGWS</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 1.5em 2em;
  background: var(--color-main-gradient);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
}
</style>
