import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'; // Импорт createRouter и других необходимых символов
import Home from '../views/portfolio.vue'; // Импорт компонента для маршрута
import about_meVue from '../views/amout_me.vue';
import hobby from '../views/hobby.vue'
// import errorPage from '../views/error_page.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/hobby',
        name: 'hobby',
        component: hobby,
    },
    {
        path: '/about',
        name: 'about_meVue',
        component: about_meVue,
    },
    // {
    //     path: '*',
    //     name: 'errorPage',
    //     component: errorPage
    //   }
    // Добавьте другие маршруты сюда
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;