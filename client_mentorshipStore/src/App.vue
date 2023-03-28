<script>
export default {
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
  <div v-for="product in products" :key="product.id" class="card-container">
    <div class="card-header">
      <h2>{{ product.title }}</h2>
      <button>X</button>
    </div>

    <p class="card-description">{{ product.description }}</p>

    <div class="card-footer">
      <span>R$ {{ product.price }}</span>
      <span>Qty: {{ product.quantity }}</span>
    </div>
  </div>
</template>



<style scoped>
.card-container {
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  min-width: 300px;
  margin: 10px;
}
.card-header, .card-footer {
  display: flex;
  justify-content: space-between;
}


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
