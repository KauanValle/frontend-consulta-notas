// import api from './modules/api.js';
import Modules from './modules/index.js'
import { createStore } from 'vuex';

const store = createStore({
    modules: Modules,
    strict: true
  });

export default store;