import store from '../../store'

export const isLoggedIn = (to, from, next) => {
    if (store.state.auth.token) {
        next()
    } else {
        next('/login')
    }
}

export const isLoggedOut = (to, from, next) => {
    store.dispatch('tryAutoLogin')
    if (!store.state.auth.token) {
        next()
    } else {
        next('/posts')
    }
}

export const changeTitle = (to, from, next) => {
    document.title = to.meta.title || document.title
    next()
}

export const isNewAccount = (to, from, next) => {
    if (from.path === '/register') {
        store.dispatch('displayMessage', {
            header: 'Hey!',
            message: 'Here you can provide you personal information',
        })
    }
    isLoggedIn(to, from, next)
}
