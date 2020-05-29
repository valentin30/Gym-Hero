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
    getUser({ state, commit, dispatch }, token) {
        fetch(`${process.env.VUE_APP_API_URL}/user`, {
            headers: {
                Authorization: token,
            },
        })
            .then(response => response.json())
            .then(json => {
                if (json.message) {
                    if (json.status === 403) {
                        return dispatch('logout')
                    }
                    return dispatch('displayMessage', {
                        header: 'Oops!',
                        message: json.message + '.',
                    })
                }
                commit('setUser', json.user)
            })
    },
    tryAutoLogin({ dispatch, commit }) {
        const token = localStorage.getItem('token')
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
