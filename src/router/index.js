import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import Gallery from "../views/Gallery.vue";
import Article from "../views/Article.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/article/:id",
    name: "article",
    component: Article,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
