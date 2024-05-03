<template>
  <div id="navbarContainer">
    <div id="navbar">
      <RouterLink to="/"><p>Madeira<strong>Madeira</strong></p></RouterLink>
      <p>Desafio Técnico - Nota Fiscal</p>
      <RouterLink to="/consultar-nfe">Consultar</RouterLink>
    </div>
  </div>
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
* {
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

#navbarContainer {
  background-color:#EA5B0C ;
  color: white;
}
#navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 70%;
  height: 8vh;
}

a {
  color: white;
}

.container {
  background-color: #ffebe0;
  margin: 20px;
  padding: 40px;
  min-height: 78vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
