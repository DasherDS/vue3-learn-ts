import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import storage from "../utils/storage"
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
                // redirect: "/testRoutertrue",
                children: [
                    {
                        path: "/testRouterfalse",
                        name: "testRouterfalse",
                        component: () => import("../views/lea-NavigationGuards/test-isFalseRouter.vue")
                    },
                    {
                        path: "/testRoutertrue",
                        name: "testRoutertrue",
                        component: () => import("../views/lea-NavigationGuards/test-isTrueRouter.vue")
                    }
                ]
            },
            {
                path: "/vantui",
                name: "Vantui",
                component: () => import("../views/lea-Vant.vue")
            },
            {
                path: "/watch",
                name: "Watch",
                component: () => import("../views/lea-watch/lea-watch.vue")
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
    const routerTest = storage.get("routerTest")
    if (to.path == "/navigationguards") {
        let strRouter = ""
        if (routerTest == '路由守卫测试标识') {
            strRouter = "testRoutertrue"
        } else {
            strRouter = "testRouterfalse"
        }
        console.log('strRouter', strRouter);

        next({ name: strRouter })
    } else {
        next()
    }


})
//路由守卫 全局  后置
router.afterEach((to, from): void => {
    console.log('后置路由守卫to', to);
    console.log('后置路由守卫from', from);

})
export default router;
