const state = {
    exercises: [],
    selected: null,
    viewed: null,
}
const getters = {
    exercises({ exercises }) {
        return exercises
    },
    selected({ selected }) {
        return selected
    },
    viewed({ viewed }) {
        return viewed
    },
}
const mutations = {
    setExercises(state, payload) {
        state.exercises = payload
    },
    pushExercise(state, payload) {
        state.exercises.push(payload)
    },
    removeExercise(state, payload) {
        state.exercises = state.exercises.filter(e => e !== payload)
    },
    setSelected(state, payload) {
        if (state.selected === payload) {
            state.selected = null
        } else {
            state.selected = payload
        }
    },
    setViewed(state, payload) {
        if (state.viewed === payload) {
            state.viewed = null
        } else {
            state.viewed = payload
        }
    },
}
const actions = {
    pushExercise({ commit }, { exercise, sets, reps, weight }) {
        if (sets) {
            commit('pushExercise', {
                exercise,
                work: [
                    {
                        sets,
                        reps: reps[0],
                        weight: weight[0],
                    },
                ],
            })
        } else {
            const newExercise = {
                exercise,
                work: [],
            }
            reps.forEach((el, index) => {
                newExercise.work.push({
                    sets: 1,
                    reps: el,
                    weight: weight[index],
                })
            })
            commit('pushExercise', newExercise)
        }
    },
    getWorkout({ commit }, token) {
        fetch('http://localhost:3000/workout/today', {
            headers: {
                Authorization: token,
            },
        })
            .then(res => res.json())
            .then(json => {
                commit('setExercises', json.exercises)
            })
    },
}

export default { state, getters, mutations, actions }
