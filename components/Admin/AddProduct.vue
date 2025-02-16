<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Product Name</label>
        <input
          v-model="product.name"
          type="text"
          id="name"
          placeholder="Enter product name"
          required
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          v-model="product.description"
          type="text"
          id="description"
          placeholder="Enter product description"
          required
        />
      </div>

      <div class="form-group">
        <label for="stock">Stock</label>
        <input
          v-model="product.stock"
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
          v-model="product.price"
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
          v-model="product.picture"
          type="text"
          id="picture"
          placeholder="Enter image URL"
          required
        />
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <select v-model="product.category" id="category">
          <option value="CARS">Cars</option>
          <option value="ELECTRONIC">Electronic</option>
          <option value="FOOD">Food</option>
          <option value="CLOTHING">Clothing</option>
        </select>
      </div>

      <button class="submit-btn" type="submit">Add product</button>
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
      product: {
        id: "",
        name: "",
        description: "",
        stock: 0,
        price: 0,
        picture: "",
        category: "CARS",
      } as Product,
    };
  },
  methods: {
    async submitForm() {
      this.product.id = v4();
      await axios.post("http://localhost:4000/Products", this.product);
    },
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
