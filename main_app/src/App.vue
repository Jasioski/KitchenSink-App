<template>
  <div id="app">
    <img src="./assets/logo.png" style="width:300px" alt="Error loading Image :'('">
    <br/>
    <br/>
    <router-link to="/">Home</router-link> |
   <!--
    <router-link to="/cats">Cats</router-link> |
    <router-link to="/dogs">Dogs</router-link> |
    <router-link to="/animals">Animals</router-link> |
    <router-link to="/add_animal">Add an Animal</router-link> |
    -->
    <router-link to="/widgets">Widgets</router-link> |
    <router-link to="/d3">D3 Tests</router-link> |
    <router-link to="/d3Graphs">D3 Graphs</router-link> |
    <router-link to="/d3Interactive">D3 Interactive Examples</router-link>
    <b-container>
      <router-view/>
    </b-container>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
