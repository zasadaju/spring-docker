import {createRouter, createWebHistory} from 'vue-router';
import Home from './views/Home.vue';
import Users from  './views/Users.vue';
import About from './views/About.vue';
import UserDetails from './components/UserDetails.vue';

const routes = [
    {path:'/', component: Home},
    {path:'/users', component: Users},
    {path:'/users/:id', component: UserDetails},
    {path:'/about', component: About},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;