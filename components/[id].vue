<template>
  <div>
    <h1>Name: {{ product.name }}</h1>
    <p>
      {{ product.description }}
    </p>
    <img :src="product.picture" alt="" />
    <p>{{ product.price }}</p>
    <p>{{ product.stock }}</p>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import type { Product } from "~/assets/types";
export default {
  data() {
    return {
      idProduct: this.$route.params.id,
      product: {} as Product,
    };
  },
  methods: {
    async fetchingProduct() {
      const response = await axios.get(
        `http://localhost:4000/products/${this.idProduct}`
      );
      this.product = response.data;
    },
  },
  mounted() {
    this.fetchingProduct();
  },
};
</script>
