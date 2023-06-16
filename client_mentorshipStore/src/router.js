import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import CreateProduct from './pages/CreateProduct.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/create-product',
      name: 'CreateProduct',
      component: CreateProduct
    }
  ]
})

export default router