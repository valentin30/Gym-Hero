import SettingsComponent from '../../../components/Settings/Settings'
import Photo from '../../../components/Settings/Photo'
import Name from '../../../components/Settings/Name'
import Height from '../../../components/Settings/Height'
import Weight from '../../../components/Settings/Weight'
import DateOfBirth from '../../../components/Settings/Date'
import Gender from '../../../components/Settings/Gender'
import { isLoggedIn, isNewAccount } from '../../guards'

export default [
    {
        path: '',
        component: SettingsComponent,
        meta: { title: 'Settings' },
        beforeEnter: isNewAccount,
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
]
