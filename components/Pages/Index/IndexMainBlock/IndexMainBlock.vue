<template>
  <section class="main-block line">
    <div class="container">
      <div class="main-block__left flex-container flex-container column content-center align-items-stretch">
        <h1 class="text--main">Приложение для заметок</h1>
        <p class="line">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis urna, viverra sit amet commodo non,
          varius eu nibh. Nullam.
        </p>
        <div class="flex-container content-center">
          <button><span>Скачать</span></button>
        </div>
      </div>
      <div class="main-block__right">
        <img
          src="/imgs/screen.png"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexMainBlock"
};
</script>

<style lang="scss" scoped>
@import "assets/sass/core/mixins";

.main-block {
  min-height: 30vh;
  width: 100%;
  @include withBg();
  animation: 0.8s FadeIn ease-in-out;

  .container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 5em;
    align-content: center;
  }

  &__left {
    animation: 0.8s GoFromLeft ease-in-out;

    button span {
      font-size: 3.5rem;
    }

    p {
      text-shadow: 2px 2px 2px white;
    }
  }

  &__right {
    animation: 0.8s GoFromRight ease-in-out;

    img {
      max-width: 100%;
      height: auto;
    }
  }
}

@media screen and (max-width: 900px) {
  .main-block {
    .container {
      grid-template-columns: 1fr;
    }

    &__left {
      align-items: center;
      p {
        text-align: center;
      }
    }
  }
}
</style>
