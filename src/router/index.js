import { createRouter, createWebHistory } from 'vue-router';
import PaginaInicio from '../views/PaginaInicio.vue';
import Producto from '../components/Producto.vue';
import Factura from '../components/Factura.vue';

const routes = [
  {
    path: '/',
    component: PaginaInicio,
  },
  {
    path: '/producto',
    component: Producto,
  },
  {
    path: '/factura',
    component: Factura,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

