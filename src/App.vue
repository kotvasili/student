<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import headerBar from './components/headerBar';


export default {
  components: {
    headerBar,
  },
  name: 'app',
};
</script>

<style>
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .container{
    max-width: 1310px;
    padding-left:15px;
    padding-right:15px;
    display: block;
    width: 100%;
    margin: 20px auto;
  }
</style>
