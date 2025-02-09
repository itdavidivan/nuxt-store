import { defineStore } from "pinia";
import type { Product } from "~/assets/types";

const useCounterStore = defineStore("counter", {
  state: () => ({
    products: [] as Product[],
    isCartDisplayed: true,
  }),
  actions: {
    addItem(product: Product) {
      const item = this.products.find((currentProduct) => {
        return currentProduct.id === product.id;
      });
      if (item === undefined) {
        this.products = [...this.products, product];
      }
    },
    removeItem() {},
    clearCart() {
      this.products = [];
    },
    toggleCart() {
      this.isCartDisplayed = !this.isCartDisplayed;
    },
  },
});
export default useCounterStore;
