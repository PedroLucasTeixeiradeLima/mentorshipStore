<script>
import ProductComponent from './components/ProductComponent.vue';

export default {
  components: {
    ProductComponent
  },
  data(){
    return{
      // THIS WILL BE RETURNED FROM OUR API
      products: []
    }
  },
  mounted() {
    // Inside it we can add any function to be executed after the component is mounted
    fetch('https://mentorship-store.onrender.com/product')
    .then(res => res.json())
    .then(res => {
      this.products = res;
    })
  }
}
</script>

<template>
  <ProductComponent 
    v-for="product in products" 
    :key="product.id"
    :title="product.title"
    :description="product.description"
    :price="product.price"
    :quantity="product.quantity"
  />
</template>



<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
