import HelloWorld from "./components/HelloWorld.vue";
import {createRouter, createWebHistory} from "vue-router";
import Person from "./components/Person.vue";

const routes = [
    {
        path: "/",
        component: HelloWorld,
    },
    {
        path: "/person",
        component: Person,
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})