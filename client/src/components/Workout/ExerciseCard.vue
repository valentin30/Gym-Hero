<template>
    <div @click="display = !display" class="outer">
        <ExerciseCard
            :exercise="exercise.exercise"
            :selected="$store.getters.viewed"
            @click.native="$store.commit('setViewed', exercise.exercise)"
        />
        <div v-if="$store.getters.viewed === exercise.exercise" class="content">
            <div class="exercise header">
                <p>Sets</p>
                <p>Reps</p>
                <p>Weight</p>
            </div>
            <div
                v-for="(set, index) in exercise.work"
                :key="index"
                class="exercise"
            >
                <p>{{ set.sets }}</p>
                <p>{{ set.reps }}</p>
                <p>{{ set.weight }}kg</p>
            </div>
            <div class="buttons" v-if="!readOnly">
                <router-link
                    tag="button"
                    class="success"
                    @click="$store.commit('removeExercise', exercise.exercise)"
                    :to="{
                        path: '/workout/add-exercise',
                        query: { editing: exercise.exercise._id },
                    }"
                    >Modify</router-link
                >
                <button
                    class="reject"
                    @click="$store.commit('removeExercise', exercise.exercise)"
                >
                    Remove
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ExerciseCard from '../Exercise/ExerciseCard'
export default {
    components: {
        ExerciseCard,
    },
    props: ['exercise', 'readOnly'],
    data() {
        return {
            display: true,
        }
    },
}
</script>

<style scoped>
.outer {
    padding: 1rem 0.5rem 0.5rem;
    border: 1px solid white;
    border-radius: 15px;
}
.outer-selected {
    padding-top: 1rem;
}
.exercise {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.content {
    padding: 0 1rem 0.5rem;
}
.exercise p {
    min-width: 60px;
    text-align: center;
    font-size: 1rem;
    margin: 0;
    color: #555;
}
.header p {
    color: rgb(0, 155, 135);
}
.buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 0 0;
}
.buttons button {
    font-size: 1rem;
    font-weight: bold;
    border: none;
    background-color: inherit;
}
.success {
    color: rgb(0, 155, 135);
}
.reject {
    color: tomato;
    margin-left: 1rem;
}
</style>
