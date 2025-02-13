<template>
  <div
    class="container mx-auto p-6 absolute w-[600px] h-[800px] right-[10px] z-[100] overflow-auto"
  >
    <div class="flex justify-between items-center border-b-2 pb-4 mb-6">
      <h2 class="text-2xl font-semibold text-gray-800">Your Shopping Cart</h2>
      <button
        @click="store.clearCart()"
        class="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-400 transition duration-300"
      >
        Clear Cart
      </button>
      <button
        @click="store.toggleCart()"
        class="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-400 transition duration-300"
      >
        X
      </button>
    </div>

    <div
      v-if="store.products.length === 0"
      class="text-center text-xl text-gray-500"
    >
      Your cart is empty. Start shopping!
    </div>

    <div v-else class="space-y-6">
      <div
        v-for="item in store.products"
        :key="item.id"
        class="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition duration-300"
      >
        <img
          :src="item.picture"
          alt="Product Image"
          class="w-32 h-32 object-cover rounded-lg mr-6"
        />
        <div class="flex-1">
          <h3 class="text-xl font-semibold text-gray-800">{{ item.name }}</h3>
          <!-- <p class="text-lg text-orange-500">{{ item.price | currency }}</p> -->
          <div class="flex items-center space-x-4 mt-4">
            <button
              @click="() => {}"
              class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-400 transition duration-300"
            >
              -
            </button>
            <span class="text-lg font-medium">{{ item.description }}</span>
            <button
              @click="store.addItem(item)"
              class="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-400 transition duration-300"
            >
              +
            </button>
            <div>{{ item.count }}</div>
            <span v-if="item.stock == item.count">LIMIT REACHED</span>
          </div>
        </div>
        <button
          @click="store.removeItem(item)"
          class="text-red-500 hover:text-red-400 transition duration-300"
        >
          Remove
        </button>
      </div>
    </div>
    <div
      v-if="totalPrice > 0"
      class="flex justify-between items-center border-t-2 pt-6 mt-6"
    >
      <div class="text-xl font-semibold text-gray-800">
        Total:
        <span class="text-500">{{ totalPrice }}$</span>
      </div>
      <button
        class="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-400 transition duration-300"
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import useCounterStore from "~/store/useStore";
export default {
  computed: {
    store() {
      return useCounterStore();
    },
    totalPrice() {
      return this.store.products.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
    },
  },
  mounted() {
    this.store.loadLocalStorage();
  },
};
</script>
<style scoped>
.container {
  background-color: rgba(128, 128, 128, 0.699);
  margin-top: 55px;
  position: fixed;
}
</style>
