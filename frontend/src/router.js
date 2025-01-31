import {createRouter, createWebHistory} from 'vue-router';
import HomeView from './views/HomeView.vue';
import UsersView from  './views/UsersView.vue';
import AboutView from './views/AboutView.vue';
import UserDetails from './components/UserDetails.vue';

const routes = [
    {path:'/', component: HomeView},
    {path:'/users', component: UsersView},
    {path:'/users/:id', component: UserDetails},
    {path:'/about', component: AboutView},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;