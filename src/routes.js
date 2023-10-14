import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home, alias: '/home'},
        {path: '/Home', component: Home},
        {path: '/Portfolio', component: Portfolio},
        {path: '/About', component: About},
        {path: '/Contact', component: Contact}
    ]
})

export default router