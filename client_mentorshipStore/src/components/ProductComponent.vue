<script>
export default {
  props: ['product', 'title', 'description', 'price', 'quantity']
}
</script>

<template>
<div class="card-container">
  <div class="card-header">
    <h2>{{ title }}</h2>
    <button>X</button>
  </div>

  <p class="card-description">{{ description }}</p>

  <div class="card-footer">
    <span>R$ {{ price }}</span>
    <span>Qty: {{ quantity }}</span>
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
</style>
