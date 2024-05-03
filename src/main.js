import { createApp } from 'vue'
import routerConfig from './router/config.js';
import store from './store/index.js'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
  .use(store)
  .use(routerConfig)
  .use(VueSweetalert2)
  .mount('#app')
