import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .use(store)
  .use(config)
  .mount('#app')
