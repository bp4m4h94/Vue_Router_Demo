<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <routerLink class="nav-link " to="/index">Home</routerLink>
      </li>
      <li class="nav-item">
        <routerLink class="nav-link" to="/page1">Page1</routerLink>
      </li>
    </ul>
  </div>
</nav>
    <img src="./assets/logo.png">
    <router-view name="menu"></router-view>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import Page1 from './components/page/page1'


export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
