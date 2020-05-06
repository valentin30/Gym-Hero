const state = {
    renderMessage: false,
    header: 'Oops!',
    message: 'Something went wrong.',
}
const getters = {
    renderMessage({ renderMessage }) {
        return renderMessage
    },
    header({ header }) {
        return header
    },
    message({ message }) {
        return message
    },
}
const mutations = {
    setHeader(state, payload) {
        state.header = payload
    },
    setMessage(state, payload) {
        state.message = payload
    },
    setRenderMessage(state, payload) {
        state.renderMessage = payload
    },
}
const actions = {
    displayMessage({ commit }, { header, message }) {
        commit('setRenderMessage', true)
        commit('setHeader', header)
        commit('setMessage', message)
    },
    closeMessage({ commit }) {
        commit('setRenderMessage', false)
    },
}

export default { state, getters, mutations, actions }
