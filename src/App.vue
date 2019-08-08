<template>
  <div id="app">
    <div class="container-fluid" id="nav">
      <!-- <img src="/assets/indigo.jfif" alt=""> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <div class="container-fluid row">
      <ul class="sidebar col-xl-2">
        <li class="sidebar__main">
          <router-link v-for="route in routes" :to="route.path" :key="route.path">{{ route.name }}</router-link>
        </li>
        <li class="sidebar__lower arrow-hover-parent">Github Repos<div :class="{white: color == 'white' }" class="arrow arrowOverview"></div></li>
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
#app {
  overflow: hidden;
  background-color: rgb(26, 26, 26);
}
.sidebar {
  border: thin #617df7 solid;
  padding-left: 0;
  height: 95vh;
  &__main {
    a {
      display: block;
      text-decoration: none;
      color: rgb(240, 240, 240);
      padding-top: 10px;
      padding-left: 10px;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
        color: #617df7;
      }
    }
    list-style: none;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
  }
  &__lower {
    margin-top:50px;
    display: block;
    text-decoration: none;
    color: rgb(240, 240, 240);
    padding-top: 10px;
    padding-left: 10px;
    list-style: none;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    bottom:0;
    &:hover{
      color:#617df7;
      cursor: pointer;
    }
  }
}

.arrow {
  display: inline-block;
  // float: left;
  cursor: pointer;
}
.arrow:before {
  content: "";
  height: 2px;
  width: 0px;
  background-color: #617df7;
  display: block;
  float: left;
  position: relative;
  top: 9px;
  transition: 0.2s ease-in-out;
}
.arrow.white:before {
  background-color: #fff;
}
.arrow:after {
  content: "";
  float: left;
  border: 11px solid #617df7;
  border-width: 0 0 2px 2px;
  width: 10px;
  height: 10px;
  line-height: 0;
  font-size: 0;
  margin-top: 9.4px;
  margin-left: 4px;
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.arrow.white:after {
  border-color: #fff;
}
.arrow:hover:before,
.arrow.isHovered:before {
  // width: 60px;
}
.arrow-hover-parent:hover .arrow:before {
  margin-left: 10px;
}
.arrow-hover-parent:hover .arrow:after {
  border-color: #fff;
}
.arrow-hover-parent-blue:hover .arrow:before {
  margin-left: 8px;
}
.arrow-hover-parent-blue:hover .arrow:after {
  border-color: #0078d4;
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
  width: auto;
  padding-top: 10px;
}

#nav a {
  font-weight: bold;
  color: rgb(240, 240, 240);
  font-family: monospace;
  font-size: 19px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #4258b9;
}
</style>
