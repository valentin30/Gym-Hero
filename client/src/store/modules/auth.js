import router from '@/router'

const state = {
    token: null,
    user:null
}
const getters = {
    token({ token }) {
        return token
    },
    isAuth({ user }) {
        return user !== null
    },
    user({ user }){
        return user
    }
}
const mutations = {
    setToken(state, payload) {
        state.token = payload
    },
    setUser(state, payload){
        state.user = payload
    }
}
const actions = {
    getUser({ state, commit }, token){
        fetch('http://localhost:3000/auth/user',{
            headers:{
                'Authorization': token
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                commit('setUser',json.user)
            })
    },
    tryAutoLogin({ dispatch, commit }) {
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const expirationDate = localStorage.getItem('expiresIn')
        const now = new Date()
        if (now >= expirationDate) {
            return
        }
        dispatch('getUser',token)
        commit('setToken', token)

    },

    logout({ commit }) {
        commit('setToken', null)
        commit('setUser',null)
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
