<template>
  <div>
    <IndexMainBlock />
    <IndexAdvantagesBlock />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IndexMainBlock from "~/components/Pages/Index/IndexMainBlock/IndexMainBlock.vue";
import IndexAdvantagesBlock from "~/components/Pages/Index/IndexAdvantagesBlock/IndexAdvantagesBlock.vue";

export default Vue.extend({
  components: { IndexAdvantagesBlock, IndexMainBlock }
});
</script>
