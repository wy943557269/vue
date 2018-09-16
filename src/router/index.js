import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Login from "@/components/Login";
import City from "@/components/City";

import FilmList from "@/components/FilmList";
import FilmDetail from "@/components/FilmDetail";
import Cinema from "@/components/Cinema";


Vue.use(Router)

export default new Router({
  routes: [
    {path: "/",name: "home",component: Home},
    {path: "/login",name: "login",component: Login},
    {path: "/city",name: "city",component: City},
    {path: "/filmlist",name: "filmlist",component: FilmList},
    {path: "/cinema",name: "cinema",component: Cinema},
    {path: "/filmdetail/:id",name: "filmdetail",component: FilmDetail,props:true},
    {path: "/*",redirect:"/"},
  ]
});
