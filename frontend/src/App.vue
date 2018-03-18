<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  /* font-family: 'Roboto', Helvetica, Arial, sans-serif; */
  font-family: 'Roboto';
  font-family: 'Roboto', sans-serif;
  /* font-family: 'Lato', sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
