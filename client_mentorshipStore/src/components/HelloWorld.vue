<script>

export default{
  data(){
    return {
      count: 0
    }
  },

  methods:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    }
  },

  
}

</script>

<template>
  <div class="greetings">
    <h1>{{ count }}</h1>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
