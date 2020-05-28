import Post from '../../components/Post/Post'
import PostList from '../../components/Post/PostList'
import { isLoggedIn } from '../guards'

export default [
    {
        path: '',
        component: PostList,
        meta: { title: 'Gym Hero' },
        beforeEnter: isLoggedIn,
    },
    {
        path: ':id',
        component: Post,
        name: 'Post',
        beforeEnter: isLoggedIn,
    },
]
