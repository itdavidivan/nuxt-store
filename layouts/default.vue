<template>
  <header>
    <button class="toggleCart" @click="store.toggleCart()">
      {{ store.isCartDisplayed ? "Close Cart" : "Show Cart" }}
    </button>
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
<style scoped>
.toggleCart {
  background-color: #4caf50; /* Green background */
  color: white; /* White text */
  font-size: 16px; /* Text size */
  padding: 10px 20px; /* Padding around the text */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s ease; /* Smooth background color change */
  z-index: 100;
  position: absolute;
  right: 10px;
}

.toggleCart:hover {
  background-color: #45a049; /* Darker green on hover */
}

.toggleCart:focus {
  outline: none; /* Remove outline on focus */
}

.toggleCart:active {
  transform: scale(0.98); /* Slight shrink effect on button click */
}

footer {
  background-color: #f1f1f1; /* Light gray background */
  color: #333; /* Dark text */
  text-align: center; /* Center align the footer text */
  padding: 20px 0; /* Padding for the footer */
  font-size: 14px; /* Font size for the footer text */
  margin-top: 40px; /* Space between footer and the main content */
}

footer h2 {
  margin: 0; /* Remove default margin from <h2> */
  font-size: 18px; /* Footer heading size */
}
</style>
