<template>
  <div>
    <products-list title="Collection of food" category="FOOD" />
  </div>
</template>

<script lang="ts">
import ProductsList from "~/components/ProductsList.vue";
export default {
  components: {
    ProductsList,
  },
};
</script>
