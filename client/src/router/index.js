import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts'
import Profile from '../views/Profile'
import WorkoutPage from '../views/Workout'
import Training from '../views/Training'
import Login from '../views/Login'
import Register from '../views/Register'
import Settings from '../views/Settings'
import Post from '../components/Post/Post'
import PostList from '../components/Post/PostList'
import ProfileComponent from '../components/Profile/Profile'
import SettingsComponent from '../components/Settings/Settings'
import Photo from '../components/Settings/Photo'
import Name from '../components/Settings/Name'
import Height from '../components/Settings/Height'
import Weight from '../components/Settings/Weight'
import DateOfBirth from '../components/Settings/Date'
import Gender from '../components/Settings/Gender'
import CreateExercise from '../components/Exercise/CreateExercise'
import Workout from '../components/Workout/Workout'
import AddExercise from '../components/Workout/AddExercise'
import store from '../store/index'

Vue.use(VueRouter)

const isLoggedIn = (to, from, next) => {
    if (store.state.auth.token) {
        next()
    } else {
        next('/login')
    }
}

const routes = [
    {
        path:'/',
        redirect:'/posts'
    },
    {
        path: '/posts',
        component: Posts,
        beforeEnter: isLoggedIn,
        children: [
            {
                path: '',
                component: PostList,
                beforeEnter: isLoggedIn,
            },
            {
                path: ':id',
                component: Post,
                name: 'Post',
                beforeEnter: isLoggedIn,
            },
        ],
    },
    {
        path: '/workout',
        component: WorkoutPage,
        beforeEnter: isLoggedIn,
        children: [
            {
                path: '',
                component: Workout,
                beforeEnter: isLoggedIn,
            },
            {
                path: 'add-exercise',
                component: AddExercise,
                beforeEnter: isLoggedIn,
            },
        ],
    },
    {
        path: '/training',
        component: Training,
        beforeEnter: isLoggedIn,
    },
    {
        path: '/profile',
        component: Profile,
        beforeEnter: isLoggedIn,
        children: [
            {
                path: '',
                component: ProfileComponent,
                beforeEnter: isLoggedIn,
            },
            {
                path: 'create-exercise',
                component: CreateExercise,
                beforeEnter: isLoggedIn,
            },
            {
                path: 'settings',
                component: Settings,
                beforeEnter: isLoggedIn,
                children: [
                    {
                        path: '',
                        component: SettingsComponent,
                        beforeEnter: isLoggedIn,
                    },
                    {
                        path: 'photo',
                        component: Photo,
                        beforeEnter: isLoggedIn,
                    },
                    {
                        path: 'name',
                        component: Name,
                        beforeEnter: isLoggedIn,
                    },
                    {
                        path: 'height',
                        component: Height,
                        beforeEnter: isLoggedIn,
                    },
                    {
                        path: 'weight',
                        component: Weight,
                        beforeEnter: isLoggedIn,
                    },
                    {
                        path: 'date',
                        component: DateOfBirth,
                        beforeEnter: isLoggedIn,
                    },
                    {
                        path: 'gender',
                        component: Gender,
                        beforeEnter: isLoggedIn,
                    },
                ],
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
                next('/posts')
            }
        },
    },
    {
        path: '/register',
        component: Register,
        beforeEnter: (to, from, next) => {
            store.dispatch('tryAutoLogin')
            if (!store.state.auth.token) {
                next()
            } else {
                next('/posts')
            }
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
