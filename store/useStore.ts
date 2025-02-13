import { defineStore } from "pinia";
import type { Product } from "~/assets/types";

const useCounterStore = defineStore("counter", {
  state: () => ({
    products: [] as (Product & { count: number })[],
    isCartDisplayed: false,
  }),
  actions: {
    addItem(product: Product) {
      const item = this.products.find((currentProduct) => {
        return currentProduct.id === product.id;
      });
      if (item === undefined) {
        this.products = [...this.products, { ...product, count: 1 }];
        this.saveToLocalStorage();
        this.isCartDisplayed = true;
      } else if (item) {
        this.products = this.products.map((currentProduct) => {
          if (currentProduct.id === product.id) {
            const newCount =
              currentProduct.count + 1 > currentProduct.stock
                ? currentProduct.stock
                : currentProduct.count + 1;

            return { ...currentProduct, count: newCount };
          }
          return currentProduct;
        });
      }
    },
    removeItem(product: Product) {
      const mapedProducts = this.products.map((currentProduct) => {
        if (currentProduct.id === product.id) {
          const newCount = currentProduct.count - 1;

          return { ...currentProduct, count: newCount };
        }
        return currentProduct;
      });
      this.products = mapedProducts.filter((item) => {
        return item.count !== 0;
      });

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
