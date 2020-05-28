import Workout from '../../components/Workout/Workout'
import AddExercise from '../../components/Workout/AddExercise'
import { isLoggedIn } from '../guards'

export default [
    {
        path: '',
        component: Workout,
        meta: { title: 'Workout' },
        beforeEnter: isLoggedIn,
    },
    {
        path: 'add-exercise',
        component: AddExercise,
        meta: { title: 'Add Exercise' },
        beforeEnter: isLoggedIn,
    },
]
