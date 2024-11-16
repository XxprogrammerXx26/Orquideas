import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component:Register},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // Utiliza import.meta.env.BASE_URL para la ruta base
  routes
});

export default router;
