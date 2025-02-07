<template>
  <div class="py-8 bg-gray-100">
    <h2 class="text-4xl font-semibold text-center text-gray-800 mb-8">
      Cars Collection
    </h2>

    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <!-- Loop through each car in carsProducts -->
      <div
        v-for="car in carsProducts"
        :key="car.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
      >
        <img
          :src="car.picture"
          alt="Product Image"
          class="w-full h-48 object-cover mb-4"
        />
        <div class="p-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            {{ car.name }}
          </h3>
          <p class="text-gray-600 mb-4">{{ car.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-blue-600"
              >{{ car.price }}€</span
            >
            <span class="text-sm text-gray-500"
              >{{ car.stock }}x available</span
            >
          </div>
          <button
            @click="addToCart(car)"
            class="mt-4 w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import type { Product } from "~/assets/types";

export default {
  data() {
    return {
      carsProducts: [] as Product[],
    };
  },
  methods: {
    async fetchingData() {
      const response = await axios.get(
        "http://localhost:4000/products/?category=CARS"
      );
      this.carsProducts = response.data;
    },
    addToCart(car: Product) {
      // Handle adding the product to the cart (for now, just log it)
      console.log(`${car.name} added to cart!`);
    },
  },
  mounted() {
    this.fetchingData();
  },
};
</script>
