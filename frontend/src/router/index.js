import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/LoginSignUp',
        name: 'LoginSignUp',
        component: () =>
            import ( /* webpackChunkName: "LoginSignUp" */ '@/views/LoginSignUpView.vue')
    },


    {
        path: '/Account',
        name: 'Account',
        component: () =>
            import ( /* webpackChunkName: "AccountView" */ '@/views/AccountView.vue')



    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'NavBar-Active-Link'
})

/* add it here */


export default router