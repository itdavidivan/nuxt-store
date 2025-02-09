import { defineStore } from "pinia";
import type { Product } from "~/assets/types";

const useCounterStore = defineStore("counter", {
  state: () => ({
    products: [] as Product[],
    isCartDisplayed: false,
  }),
  actions: {
    addItem(product: Product) {
      const item = this.products.find((currentProduct) => {
        return currentProduct.id === product.id;
      });
      if (item === undefined) {
        this.products = [...this.products, product];
        this.saveToLocalStorage();
        this.isCartDisplayed = true;
      }
    },
    removeItem(product: Product) {
      const items = this.products.filter((currentProduct) => {
        return currentProduct.id !== product.id;
      });
      this.products = items;
      this.saveToLocalStorage();
    },
    clearCart() {
      this.products = [];
      this.saveToLocalStorage();
    },
    toggleCart() {
      this.isCartDisplayed = !this.isCartDisplayed;
    },
    saveToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.products));
    },
    loadLocalStorage() {
      const storedProducts = localStorage.getItem("cart");
      if (storedProducts) {
        this.products = JSON.parse(storedProducts);
      }
    },
  },
});
export default useCounterStore;
