<template>
  <RouterLink to="/teste">Teste</RouterLink>
  <RouterView/>
</template>

<script>

/**
 * Anotações
 * 
 * Para utilizar o vue-router, terá que ser adicionado uma nova rota dentro do arquivo "router/config.js"
 * Dentro desse arquivo está descrito passo a passo de como adicionar um novo component na sua nova rota.
 * 
 * E para utilizar a sua nova rota criada, basta adicionar o valor do "path" do arquivo config.js dentro do parametro "to" na tag <RouterLink>.
 */

export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
