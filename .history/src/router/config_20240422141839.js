import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../pages/HomePage.vue'
import Lifecycle from '../pages/LifeCycle.vue'
import Diretivas from '../pages/Diretivas.vue'
import Metodos from '../pages/Metodos.vue'
import Eventos from '../pages/Eventos.vue'
import Emit from '../pages/Emit.vue'
import Api from '../pages/Api.vue'

const routes = [
    { 
        path: '/home', 
        component: HomeView 
    },
    { 
        path: '/lifecycle', 
        component: Lifecycle 
    },
    { 
        path: '/diretivas', 
        component: Diretivas 
    },
    { 
        path: '/metodos', 
        component: Metodos 
    },
    { 
        path: '/eventos', 
        component: Eventos 
    },
    { 
        path: '/emit', 
        component: Emit 
    },
    { 
        path: '/api', 
        component: Api 
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })

export default router;