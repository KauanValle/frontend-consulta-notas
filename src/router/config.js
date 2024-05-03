import ConsultarNFe from '@/views/ConsultarNFe.vue';
import { createMemoryHistory, createRouter } from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue';

// Para criação de uma nova rota, é só criar um novo JSON seguindo a forma que está feito e passando o component, no caso, seu component.
const routes = [
    { 
        path: '/', 
        component: PaginaInicial 
    },
    { 
        path: '/consultar-nfe', 
        component: ConsultarNFe 
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router;