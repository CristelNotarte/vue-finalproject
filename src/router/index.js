import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "../views/About.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Tasks from "../views/Tasks.vue";
import Exams from "../views/Exams.vue";
import Practice from "../views/Practice.vue";
import NewTask from "../views/NewTask.vue";
import NewExam from "../views/NewExam.vue";
import ViewTask from "../views/ViewTask.vue";
import ViewExam from "../views/ViewExam.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/CreateAccount",
      name: "CreateAccount",
      component: CreateAccount,
    },
    {
      path: "/Tasks",
      name: "Tasks",
      component: Tasks,
    },
    {
      path: "/Exams",
      name: "Exams",
      component: Exams,
    },
    {
      path: "/Practice",
      name: "Practice",
      component: Practice,
    },
    {
      path: "/NewTask",
      name: "NewTask",
      component: NewTask,
    },
    {
      path: "/NewExam",
      name: "NewExam",
      component: NewExam,
    },
    {
      path: "/ViewTask",
      name: "ViewTask",
      component: ViewTask,
    },
    {
      path: "/ViewExam",
      name: "ViewExam",
      component: ViewExam,
    },
  ],
});

export default router;
