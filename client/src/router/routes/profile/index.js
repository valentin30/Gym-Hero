import Settings from '../../../views/Settings'
import ProfileComponent from '../../../components/Profile/Profile'
import CreateExercise from '../../../components/Exercise/CreateExercise'
import SettingsRoutes from './settings'
import { isLoggedIn } from '../../guards'

export default [
    {
        path: '',
        component: ProfileComponent,
        meta: { title: 'Profile' },
        beforeEnter: isLoggedIn,
    },
    {
        path: 'create-exercise',
        component: CreateExercise,
        meta: { title: 'Create Exercise' },
        beforeEnter: isLoggedIn,
    },
    {
        path: 'settings',
        component: Settings,
        meta: { title: 'Settings' },
        beforeEnter: isLoggedIn,
        children: [...SettingsRoutes],
    },
]
