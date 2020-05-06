import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import message from './modules/message'
import workout from './modules/workout'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        message,
        workout,
    },
})
