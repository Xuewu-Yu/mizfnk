<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
	<index/>
  </div>
</template>

<script>
import index from './components/index.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld
	index
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
font-family: Source Han Sans CN;
}
</style>
