import { createMemoryHistory, createRouter } from 'vue-router'
import App from '@/App.vue'

const routes = [
    { 
        path: '/', 
        component: App 
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