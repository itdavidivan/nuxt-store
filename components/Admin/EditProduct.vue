<template>
  <div class="form-container">
    <!-- Displaying product names -->
    <div class="product-list">
      <h2>Product List</h2>
      <div
        @click="selectedProduct = item"
        v-for="item in products"
        :key="item.id"
        class="product-item"
      >
        {{ item.name }}
      </div>
    </div>

    <!-- Form to add new products -->
    <form v-if="selectedProduct !== null" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Product Name</label>
        <input
          v-model="selectedProduct.name"
          type="text"
          id="name"
          placeholder="Enter product name"
          required
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          v-model="selectedProduct.description"
          type="text"
          id="description"
          placeholder="Enter product description"
          required
        />
      </div>

      <div class="form-group">
        <label for="stock">Stock</label>
        <input
          v-model="selectedProduct.stock"
          type="number"
          id="stock"
          placeholder="Enter stock quantity"
          required
          min="1"
        />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input
          v-model="selectedProduct.price"
          type="number"
          id="price"
          placeholder="Enter price"
          required
          min="1"
        />
      </div>

      <div class="form-group">
        <label for="picture">Picture URL</label>
        <input
          v-model="selectedProduct.picture"
          type="text"
          id="picture"
          placeholder="Enter image URL"
          required
        />
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <select v-model="selectedProduct.category" id="category">
          <option value="CARS">Cars</option>
          <option value="ELECTRONIC">Electronic</option>
          <option value="FOOD">Food</option>
          <option value="CLOTHING">Clothing</option>
        </select>
      </div>

      <button
        :disabled="isLoading"
        class="w-full py-2 px-4 font-semibold disabled:bg-gray-400 text-white bg-green-500 rounded-lg"
        type="submit"
      >
        {{ isLoading ? "Loading..." : "Edit product" }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { v4 as uuidv4, v4 } from "uuid";
import axios from "axios";
import type { Product } from "~/assets/types";

export default {
  data() {
    return {
      selectedProduct: null as null | Product,
      products: [] as Product[],
      isLoading: false,
    };
  },
  methods: {
    delay: function (ms: number) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    async submitForm() {
      if (this.selectedProduct === null) return;
      this.isLoading = true;
      await this.delay(2000);
      const response = await axios.put(
        `http://localhost:4000/Products/${this.selectedProduct.id}`,
        this.selectedProduct
      );
      this.isLoading = false;
    },
    async gettingData() {
      const response = await axios.get("http://localhost:4000/Products/");
      this.products = response.data;
    },
  },
  mounted() {
    this.gettingData();
  },
};
</script>

<style scoped>
/* General form container */
.form-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Product list container */
.product-list {
  margin-bottom: 20px;
}

.product-list h2 {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.product-item {
  padding: 10px;
  font-size: 16px;
  background-color: #f1f1f1;
  margin: 5px 0;
  border-radius: 5px;
  color: #555;
  cursor: pointer;
}

.product-item:hover {
  background-color: #e0e0e0;
}

/* Form input fields and labels */
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 14px;
}

input,
select {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

input:focus,
select:focus {
  border-color: #4caf50;
  outline: none;
}

/* Button styling */
.submit-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
}

.submit-btn:hover {
  background-color: #45a049;
}

/* Additional styles */
input::placeholder,
select::placeholder {
  color: #888;
}
</style>
