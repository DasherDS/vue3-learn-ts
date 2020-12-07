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
            },
            {
                path: "/lifecycle",
                name: "Lifecycle",
                component: () => import("../views/lea-lifecycleHooks.vue")
            },
            {
                path: '/navigationguards',
                name: "NavigationGuards",
                component: () => import("../views/lea-NavigationGuards/lea-NavigationGuards.vue"),
                children:[
                    
                ]
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

//路由守卫  全局  前置
router.beforeEach((to, from, next): void => {
    console.log('前置路由守卫to', to);
    console.log('前置路由守卫from', from);
    next()
})
//路由守卫 全局  后置
router.afterEach((to, from): void => {
    console.log('后置路由守卫to', to);
    console.log('后置路由守卫from', from);

})
export default router;
