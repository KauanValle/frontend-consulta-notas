import { createApp } from 'vue'
import config from './router/config.js';
import App from './App.vue'

createApp(App)
  .use(store)
  .use(config)
  .mount('#app')
