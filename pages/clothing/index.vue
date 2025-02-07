<template>
  <div>
    <products-list title="Collection of new clothing" category="CLOTHING" />
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
