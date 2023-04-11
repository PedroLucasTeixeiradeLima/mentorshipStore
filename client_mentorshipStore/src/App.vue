<script>
import ProductComponent from './components/ProductComponent.vue';

export default {
  components: {
    ProductComponent
  },
  data(){
    return{
      // THIS WILL BE RETURNED FROM OUR API
      products: [
        {
          id: 1,
          title: 'Mocked product 1',
          description: 'Mocked description 1',
          price: 10,
          quantity: 12
        },
        {
          id: 2,
          title: 'Mocked product 2',
          description: 'Mocked description 2',
          price: 10,
          quantity: 12
        },
        {
          id: 3,
          title: 'Mocked product 3',
          description: 'Mocked description 3',
          price: 10,
          quantity: 12
        },
        {
          id: 4,
          title: 'Mocked product 4',
          description: 'Mocked description 4',
          price: 10,
          quantity: 12
        },
        {
          id: 5,
          title: 'Mocked product 5',
          description: 'Mocked description 5',
          price: 10,
          quantity: 12
        }
      ]
    }
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
