import { createRouter, createWebHistory } from 'vue-router';
import CreateProduct from './pages/CreateProduct.vue';
import HomePage from './pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/create-product',
      name: 'CreateProduct',
      component: CreateProduct
    }
  ]
});

export default router;