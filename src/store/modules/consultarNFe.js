import { ref } from 'vue'; // Importa ref do Vue 3
import axios from "axios";

// Variaveis de dados.
const state = ref({
  nota_chave: [],
  nota_erro: []
});

// Métodos para pegar o state.
const getters = {
    pegarChaveDaNota(state){
        return state.nota_chave;
    },
    pegarErrosDaNota(state){
        return state.nota_erro;
    }
}

// Método para salvar um dado no state, porém assincrono.
const actions = {
    async salvarNotaChave(context, data){
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:8989/api/nota-fiscal/" + data)
            .then((res) => {
                context.commit('salvarChaveDaNota', res.data)
                resolve()
            }).catch((err) => {
                context.commit("salvarErroDaNota", err.response.data)
                reject(err)
            })
        })
    }
}

// Métodos para setar dados dentro da state.
const mutations = {
    salvarChaveDaNota(state, data){
        state.nota_chave = data;
    },
    salvarErroDaNota(state, data){
        state.nota_erro = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}