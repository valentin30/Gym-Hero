import router from '@/router'

const state = {
    token: null,
    user: null,
}
const getters = {
    token({ token }) {
        return token
    },
    isAuth({ user }) {
        return user !== null
    },
    user({ user }) {
        return user
    },
}
const mutations = {
    setToken(state, payload) {
        state.token = payload
    },
    setUser(state, payload) {
        state.user = payload
    },
}
const actions = {
    getUser({ state, commit }, token) {
        fetch('http://localhost:3000/user', {
            headers: {
                Authorization: token,
            },
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                commit('setUser', json.user)
            })
    },
    tryAutoLogin({ dispatch, commit }) {
        const token = localStorage.getItem('token')
        console.log(!token)
        if (!token) {
            return localStorage.clear()
        }
        const expirationDate = new Date(localStorage.getItem('expiresIn'))
        const now = new Date()
        if (now >= expirationDate) {
            return localStorage.clear()
        }
        dispatch('getUser', token)
        dispatch('getWorkout', token)
        commit('setToken', token)
    },

    logout({ commit }) {
        commit('setToken', null)
        commit('setUser', null)
        localStorage.clear()
        router.push('/login')
    },

    autoLogout({ dispatch }) {
        setTimeout(() => {
            dispatch('logout')
        }, 60 * 60 * 1000)
    },
}
export default {
    state,
    getters,
    mutations,
    actions,
}
