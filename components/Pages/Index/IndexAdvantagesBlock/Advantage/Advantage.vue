<template>
  <article class="advantage flex-container column relative">
    <img :src="icon" alt="" />
    <h3 class="text--main small-line">{{ title }}</h3>
    <p class="align-center">{{ text }}</p>
  </article>
</template>

<script>
export default {
  name: "Advantage",
  props: {
    icon: String,
    title: String,
    text: String
  }
};
</script>

<style scoped lang="scss">
.advantage {
  padding: 1.5em;
  border-radius: 0.5em;
  border: 0.2em solid lightgray;
  box-shadow: 5px 5px 5px -2px gray;
  transition: 0.3s box-shadow ease-in-out;
  background: #fff;
  z-index: 2;

  animation: 0.8s FadeIn ease-in-out;

  &:hover {
    img {
      transform: translateY(-5%) scale(1.05);
    }
  }

  img {
    width: 8em;
    height: 8em;
    transition: 0.3s transform ease-in-out;
  }
}
</style>
