<template>
    <div @click="display = !display" class="outer">
        <ExerciseCard
            :exercise="exercise.exercise"
            :selected="$store.getters.viewed"
            @click.native="$store.commit('setViewed', exercise.exercise)"
        />
        <div v-if="$store.getters.viewed === exercise.exercise">
            {{ exercise.work }}
        </div>
    </div>
</template>

<script>
import ExerciseCard from '../Exercise/ExerciseCard'
export default {
    components: {
        ExerciseCard,
    },
    props: ['exercise'],
    data() {
        return {
            display: true,
        }
    },
}
</script>

<style scoped>
.outer {
    padding: 0.5rem;
    margin: 0.5rem 0.5rem 0;
    border: 1px solid white;
    border-radius: 15px;
}
</style>
