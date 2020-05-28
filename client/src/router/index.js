import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts'
import Profile from '../views/Profile'
import WorkoutPage from '../views/Workout'
import Training from '../views/Training'
import Login from '../views/Login'
import Register from '../views/Register'
import PostsRoutes from './routes/posts'
import WorkoutRoutes from './routes/workout'
import ProfileRoutes from './routes/profile'
import { changeTitle, isLoggedIn, isLoggedOut } from './guards'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/posts',
    },
    {
        path: '/posts',
        component: Posts,
        meta: { title: 'Gym Hero' },
        beforeEnter: isLoggedIn,
        children: [...PostsRoutes],
    },
    {
        path: '/workout',
        component: WorkoutPage,
        meta: { title: 'Workout' },
        beforeEnter: isLoggedIn,
        children: [...WorkoutRoutes],
    },
    {
        path: '/training',
        component: Training,
        meta: { title: 'Workout Log' },
        beforeEnter: isLoggedIn,
    },
    {
        path: '/profile',
        component: Profile,
        beforeEnter: isLoggedIn,
        children: [...ProfileRoutes],
    },
    {
        path: '/login',
        component: Login,
        meta: { title: 'Login' },
        beforeEnter: isLoggedOut,
    },
    {
        path: '/register',
        component: Register,
        meta: { title: 'Register' },
        beforeEnter: isLoggedOut,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach(changeTitle)

export default router
