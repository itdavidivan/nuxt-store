import { defineStore } from "pinia";
import type { Product } from "~/assets/types";

const useCounterStore = defineStore("counter", {
  state: () => ({
    products: [] as Product[],
    isCartDisplayed: true,
  }),
  actions: {
    addItem(product: Product) {
      this.products = [...this.products, product];
    },
    removeItem() {},
    toggleCart() {
      this.isCartDisplayed = !this.isCartDisplayed;
    },
  },
});
export default useCounterStore;
