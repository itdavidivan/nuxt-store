<template>
  <div>
    <button @click="state = 'ADD'" class="btn add">Add product</button>
    <button @click="state = 'EDIT'" class="btn edit">Edit product</button>
    <button @click="state = 'DELETE'" class="btn delete">Delete product</button>
  </div>
  <div>
    <add-product v-if="state === 'ADD'"></add-product>
    <edit-product v-if="state === 'EDIT'"></edit-product>
    <delete-product v-if="state === 'DELETE'"></delete-product>
  </div>
</template>

<script lang="ts">
import AddProduct from "~/components/Admin/AddProduct.vue";
import EditProduct from "~/components/Admin/EditProduct.vue";
import DeleteProduct from "~/components/Admin/DeleteProduct.vue";
export default {
  components: {
    AddProduct,
    EditProduct,
    DeleteProduct,
  },

  data() {
    return {
      state: "ADD" as "ADD" | "EDIT" | "DELETE",
    };
  },
};
</script>

<style scoped>
/* General button style */
.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s;
}

/* Add product button */
.add {
  background-color: #4caf50;
  color: white;
}

.add:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

/* Edit product button */
.edit {
  background-color: #2196f3;
  color: white;
}

.edit:hover {
  background-color: #1e88e5;
  transform: scale(1.05);
}

/* Delete product button */
.delete {
  background-color: #f44336;
  color: white;
}

.delete:hover {
  background-color: #e53935;
  transform: scale(1.05);
}
</style>
