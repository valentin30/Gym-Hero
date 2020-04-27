const state = {
    userId: null,
    token: null,
}
const getters = {
    userId({ userId }) {
        return userId
    },
    token({ token }) {
        return token
    },
    isAuth({ token }) {
        return token !== null
    },
}
const mutations = {
    setUserId(state, payload) {
        state.userId = payload
    },
    setToken(state, payload) {
        state.token = payload
    },
}
const actions = {
    auth({ commit }, { token, userId }) {
        commit('setToken', token)
        commit('setUserId', userId)
    },

    tryAutoLogin({ dispatch }) {
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const expirationDate = localStorage.getItem('expiresIn')
        const userId = localStorage.getItem('userId')
        const now = new Date()
        if (now >= expirationDate) {
            return
        }
        dispatch('auth', { token, userId })
    },

    logout({ dispatch }) {
        dispatch('auth', { token: null, userId: null })
        localStorage.clear()
        router.push('/login')
    },

    autoLogout({ dispatch }) {
        setTimeout(() => {
            dispatch('logout')
        }, 3600 * 1000)
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}
