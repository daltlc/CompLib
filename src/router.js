import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/button",
      name: "Button",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Button.vue")
    },
    {
      path: "/scrollBehavior",
      name: "ScrollBehavior",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ScrollBehavior.vue")
    },
    {
      path: "/uhfs",
      name: "UHFs",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/UHFs.vue")
    }
  ],


  sideNavComponents: [
    {
      path: "/button",
      name: "Button",
    },
    {
      path: "/scrollBehavior",
      name: "ScrollBehavior",
    },
    {
      path: "/uhfs",
      name: "UHFs",

    }
  ]
});
