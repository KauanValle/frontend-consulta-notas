import { createApp } from 'vue'
import routerConfig from './router/config.js';
import store from './store/index.js'
import App from './App.vue'

createApp(App)
  .use(store)
  .use(routerConfig)
  .mount('#app')
