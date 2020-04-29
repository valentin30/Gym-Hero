const state = {
    exercises:[]
}
const getters = {
    exercises({ exercises }){
        return exercises
    }
}
const mutations = {
    pushExercise(state, payload){
        state.exercises.push(payload)
        
    },
    removeExercise(state, payload){
        state.exercises = state.exercises.filter(e => e.exercise._id !== payload._id)
    }
}
const actions = {
    pushStraightSets({ commit }, payload){
        commit('pushExercise',payload)
    },
    pushRampedSets({ commit }, { exercise, reps, weight }){
        for (let index = 0; index < reps.length; index++) {
            if(!reps[index] || !weight[index]){ continue }
            commit('pushExercise',{
                exercise,
                sets: 1,
                reps: reps[index],
                weight: weight[index]
            })            
        }
    }
}

export default { state, getters, mutations, actions }