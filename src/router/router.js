import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("../views/Home.vue"),
    },
    {
        name: "booking",
        path: "/booking",
        component: () => import("../views/booking.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
export default router;
