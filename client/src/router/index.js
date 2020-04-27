import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts'
import Profile from '../views/Profile'
import Workout from '../views/Workout'
import Training from '../views/Training'
import Login from '../views/Login'
import Register from '../views/Register'
import Settings from '../views/Settings'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
    {
        path: '/posts',
        component: Posts,
        beforeEnter: (to, from, next) => {
            if (store.state.auth.token) {
                next()
            } else {
                next('/login')
            }
        },
    },
    {
        path: '/workout',
        component: Workout,
        beforeEnter: (to, from, next) => {
            if (store.state.auth.token) {
                next()
            } else {
                next('/login')
            }
        },
    },
    {
        path: '/training',
        component: Training,
        beforeEnter: (to, from, next) => {
            if (store.state.auth.token) {
                next()
            } else {
                next('/login')
            }
        },
    },
    {
        path: '/profile',
        children: [
            {
                path: '',
                component: Profile,
                beforeEnter: (to, from, next) => {
                    if (store.state.auth.token) {
                        next()
                    } else {
                        next('/login')
                    }
                },
            },
            {
                path: 'settings',
                component: Settings,
                beforeEnter: (to, from, next) => {
                    if (store.state.auth.token) {
                        next()
                    } else {
                        next('/login')
                    }
                },
            },
        ],
    },
    {
        path: '/login',
        component: Login,
        beforeEnter: (to, from, next) => {
            store.dispatch('tryAutoLogin')
            if (!store.state.auth.token) {
                next()
            } else {
                next('/')
            }
        }    
    },
    {
        path: '/register',
        component: Register,
        beforeEnter: (to, from, next) => {
            store.dispatch('tryAutoLogin')
            if (!store.state.auth.token) {
                next()
            } else {
                next('/')
            }
        } 
    },
    {
        path: '*', redirect: '/posts'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
