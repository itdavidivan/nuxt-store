<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Product container -->
    <div class="bg-white rounded-lg shadow-2xl overflow-hidden md:flex">
      <!-- Product image -->
      <div class="md:w-1/2 flex justify-center">
        <img
          :src="product.picture"
          alt="Product image"
          class="w-full h-auto object-cover rounded-t-lg md:rounded-l-lg transition-transform transform hover:scale-105"
        />
      </div>

      <!-- Product details -->
      <div class="md:w-1/2 p-8">
        <h1 class="text-4xl font-extrabold text-gray-800 mb-6">
          {{ product.name }}
        </h1>
        <p class="text-lg text-gray-700 mb-6">{{ product.description }}</p>

        <div class="flex items-center justify-between mb-6">
          <p class="text-3xl font-bold text-teal-600">{{ product.price }}€</p>
          <p class="text-sm text-gray-500">{{ product.stock }} available</p>
        </div>

        <!-- Add to Cart button -->
        <button
          @click="store.addItem(product)"
          class="w-full py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-500 transition-all duration-300 transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import type { Product } from "~/assets/types";
import useCounterStore from "~/store/useStore";

export default {
  data() {
    return {
      idProduct: this.$route.params.id,
      product: {} as Product,
    };
  },
  computed: {
    store() {
      return useCounterStore();
    },
  },
  methods: {
    async fetchingProduct() {
      const response = await axios.get(
        `http://localhost:4000/products/${this.idProduct}`
      );
      this.product = response.data;
    },
    addToCart(product: Product) {
      console.log(`${product.name} added to cart!`);
    },
  },
  mounted() {
    this.fetchingProduct();
  },
};
</script>
