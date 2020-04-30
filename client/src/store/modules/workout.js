const state = {
    exercises: [],
    selected: null,
}
const getters = {
    exercises({ exercises }) {
        return exercises
    },
    selected({ selected }) {
        return selected
    },
}
const mutations = {
    setExercises(state, payload){
        state.exercises = payload
    },
    pushExercise(state, payload) {
        state.exercises.push(payload)
    },
    removeExercise(state, payload){
        state.exercises = state.exercises.filter( e => e !== payload)
    },
    setSelected(state, payload) {
        if (state.selected === payload) {
            state.selected = null
        } else {
            state.selected = payload
        }
    },
}
const actions = {
    pushStraightSets({ commit }, payload) {
        commit('pushExercise', payload)
    },
    pushRampedSets({ commit }, { exercise, reps, weight }) {
        for (let index = 0; index < reps.length; index++) {
            if (!reps[index] || !weight[index]) {
                continue
            }
            commit('pushExercise', {
                name:exercise.name,
                sets: 1,
                reps: reps[index],
                weight: weight[index],
            })
        }
    },
    getWorkout({ commit }, token){
        fetch('http://localhost:3000/workout/today',{
            headers:{
                Authorization: token
            }
        })
            .then(res => res.json())
            .then(json => {
                commit('setExercises',json.exercises)
            })
    }
}

export default { state, getters, mutations, actions }
