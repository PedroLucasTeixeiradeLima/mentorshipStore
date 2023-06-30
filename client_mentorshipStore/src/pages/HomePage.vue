<script>
import ProductComponent from '../components/ProductComponent.vue';

export default {
  components: {
    ProductComponent
  },
  data() {
    return {
      // THIS WILL BE RETURNED FROM OUR API
      products: [],
      name: ""
    };
  },
  mounted() {
    // Inside it we can add any function to be executed after the component is mounted
    fetch('https://mentorship-store.onrender.com/product')
      .then(res => res.json())
      .then(res => {
        this.products = res;
      });
  }
};
</script>

<template>
  <h1> Home </h1>
  <ProductComponent v-for="product in products" :key="product.id" :title="product.title"
    :description="product.description" :price="product.price" :quantity="product.quantity" />
  <p>{{ name }}</p>
  <form>
    <input v-model="name" placeholder="Insert Here" />
  </form>
  <RouterLink to="/create-product">Create New Product</RouterLink>
</template>

<style scoped></style>
