import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue';

// Para criação de uma nova rota, é só criar um novo JSON seguindo a forma que está feito e passando o component, no caso, sua view.
const routes = [
    { 
        path: '/teste', 
        component: App 
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router;