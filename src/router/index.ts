import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
        redirect: '/homeindex'
    },
    {
        path: "/homeindex",
        name: "HomeIndex",
        component: () => import("../views/home-index.vue"),
        redirect: "/resources",
        children: [
            {
                path: '/resources',
                name: 'Resources',
                component: () => import("../views/lea-Resources.vue")
            },
            {
                path: "/ref",
                name: "learef",
                component: () => import("../views/lea-ref.vue")
            },
            {
                path: "/reactive",
                name: "leareactive",
                component: () => import("../views/lea-reactive.vue")
            },
            {
                path: "/useStore",
                name: "useStore",
                component: () => import("../views/lea-useStore.vue")
            }
        ]
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import("../views/About.vue")
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;
