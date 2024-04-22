import Modules from './modules/index.js'
import { createStore } from 'vuex';

// Este código irá importar automaticamente todos os arquivos criados dentro da pasta "modules". 
// No código quando for chamar algum método do $store, terá que passar o nome da pasta onde se localiza.

// Exemplo: "api/pegarUsuario();"

const store = createStore({
    modules: Modules,
    strict: true
  });

export default store;