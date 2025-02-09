<template>
  <header>
    <button @click="store.toggleCart()">Show Cart</button>
    <shopping-cart v-if="store.isCartDisplayed"></shopping-cart>
  </header>
  <nuxt-page></nuxt-page>
  <footer><h2>footer</h2></footer>
</template>

<script lang="ts">
import ShoppingCart from "~/components/ShoppingCart.vue";
import useCounterStore from "~/store/useStore";

export default {
  components: {
    ShoppingCart,
  },
  computed: {
    store() {
      return useCounterStore();
    },
  },
};
</script>

<style scoped></style>
