<template>
  <section class="advantages relative line">
    <div class="container">
      <h2 class="line text--main align-center">Почему стоит использовать Notesier?</h2>
      <div class="advantages__container">
        <Advantage
          title="Список дел"
          text="Вы можете создавать не только заметки, но и дела. Все самые важные вещи в одном месте!"
          icon="/imgs/advantages/todo_list.png"
        />
        <Advantage
          title="Распорядок дня"
          text="Вы можете планировать свой день, чтобы достичь лучшей продуктивности!"
          icon="/imgs/advantages/timer.png"
        />
        <Advantage
          title="Прочь лимиты"
          text="Вы можете создать сколько угодно заметок и дел. На это нет никаких ограничений!"
          icon="/imgs/advantages/no-limits.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Advantage from "~/components/Pages/Index/IndexAdvantagesBlock/Advantage/Advantage";
export default {
  name: "IndexAdvantagesBlock",
  components: { Advantage }
};
</script>

<style scoped lang="scss">
@import "assets/sass/core/mixins";

.advantages {
  animation: 0.8s GoFromDown ease-in-out;

  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 30em);
    justify-content: space-around;
    grid-gap: 5em;
  }

  &:after {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    content: " ";
    transform: rotateY(180deg);
    pointer-events: none;
    z-index: 1;
    @include withBg();
  }
}
</style>
