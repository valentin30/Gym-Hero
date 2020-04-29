const state = {
    exercises:[]
    // exercise = {
    //     exercise:{
    //         mongoose object
    //     },
    //     sets: Number,
    //     reps: Number,
    //     weight:Number, 
    // }
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
const actions = {}

export default { state, getters, mutations, actions }