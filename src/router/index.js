import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue";
import CalculatorView from "../views/CalculatorView.vue";
import ConverterView from "../views/ConverterView.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "posts",
      component: PostsView,
    },
    {
      path: "/posts/:id?",
      name: "posts-id",
      component: PostsView,
    },
    {
      path: "/calculator",
      name: "calculator",
      component: CalculatorView,
    },
    {
      path: "/converter",
      name: "converter",
      component: ConverterView,
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: NotFoundPage,
    }
  ],
});

export default router;
