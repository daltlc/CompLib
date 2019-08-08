<template>
  <div id="app">
    <div class="container-fluid" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container-fluid row">
    <ul class="sidebar  col-xl-2">
      <li class="sidebar__main">
        <router-link v-for="route in routes" :to="route.path" :key="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
    <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: this.$router.options.sideNavComponents
    };
  }
};
</script>
<style lang="scss" scoped>
@import "/styles/partials/grid.scss";
@import "@/styles/partials/__variables.scss";
#app{
  overflow:hidden;
}
.sidebar {
  padding-left: 0;
  &__main {
    border: thin #4258b9 solid;
   
    
    height: 90vh;
    a {
      display:block;
      text-decoration: none;
      color: black;
      padding-top: 10px;
      padding-left: 10px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
        color: #4258b9;
      }
    }
    list-style: none;
    font-family: monospace;
    font-size: 20px;
  }
}
</style>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
#nav {
  width:auto;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-family: monospace;
  font-size: 17px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #4258b9;
}
</style>
