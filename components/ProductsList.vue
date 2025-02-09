<template>
  <div class="py-8 bg-gray-100">
    <h2 class="text-4xl font-semibold text-center text-gray-800 mb-8">
      {{ title }}
    </h2>

    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <!-- Loop through each car in carsProducts -->
      <div
        v-for="product in allProducts"
        :key="product.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
      >
        <nuxt-link :to="`/${category.toLocaleLowerCase()}/${product.id}`">
          <img
            :src="product.picture"
            alt="Product Image"
            class="w-full h-48 object-cover mb-4"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">
              {{ product.name }}
            </h3>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold text-blue-600"
                >{{ product.price }}€</span
              >
              <span class="text-sm text-gray-500"
                >{{ product.stock }}x available</span
              >
            </div>
          </div>
        </nuxt-link>
        <button
          @click.self="store.addItem(product)"
          class="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import type { PropType } from "vue";
import type { Product, ProductCategory } from "~/assets/types";
import useCounterStore from "~/store/useStore";

export default {
  data() {
    return {
      allProducts: [] as Product[],
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String as PropType<ProductCategory>,
      required: true,
    },
  },
  methods: {
    async fetchingData() {
      const response = await axios.get(
        `http://localhost:4000/products/?category=${this.category}`
      );
      this.allProducts = response.data;
    },
    addToCart(car: Product) {
      // Handle adding the product to the cart (for now, just log it)
      console.log(`${car.name} added to cart!`);
    },
  },
  computed: {
    store() {
      return useCounterStore();
    },
  },
  mounted() {
    this.fetchingData();
  },
};
</script>
