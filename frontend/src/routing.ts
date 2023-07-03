import HelloWorld from "./components/HelloWorld.vue";
import {createRouter, createWebHistory} from "vue-router";
import LocalPersons from "./components/LocalPersons.vue";
import PlaceholderPersons from "./components/PlaceholderPersons.vue";

const routes = [
    {
        path: "/",
        component: HelloWorld,
    },
    {
        path: "/person",
        component: LocalPersons,
    },
    {
        path: "/placeholder",
        component: PlaceholderPersons,
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})