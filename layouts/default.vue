<template>
  <div class="app-container">
    <Header />
    <main class="flex-container column align-items-stretch">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";

/*====================*/

export default {
  components: { Footer, Header },
  beforeCreate() {
    this.$store.dispatch("auth");
  }
};
</script>

<style>
main {
  flex: 1;
  height: 100%;
}
</style>
