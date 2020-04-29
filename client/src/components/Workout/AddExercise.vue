<template>
    <div class="body">
        <Spinner v-if="!allExercises" />
        <template v-else>
            <p class="settings-header">Select an exercise</p>
            <Exercise
                v-for="exercise in allExercises"
                @click.native="select(exercise)"
                @close="selectedExercise = $event"
                :class="{ 'selected-exercise': selectedExercise === exercise }"
                :key="exercise.name"
                :exercise="exercise"
                :selectedExercise.sync="selectedExercise"
            />
        </template>
    </div>
</template>

<script>
import Spinner from '../General/Spinner'
import Exercise from '../Exercise/Exercise'
export default {
    components: {
        Spinner,
        Exercise,
    },
    created() {
        fetch('http://localhost:3000/exercise', {
            headers: {
                Authorization: this.$store.getters.token,
            },
        })
            .then(response => response.json())
            .then(json => {
                if (json.message) {
                    this.$store.dispatch('displayMessage', {
                        header: 'Hey!',
                        message: json.message + '.',
                    })
                    return this.$router.go(-1)
                }
                console.log(json)
                this.allExercises = json.exercises
            })
    },
    data() {
        return {
            allExercises: null,
            selectedExercise: null,
        }
    },
    methods:{
        select(exercise){
            this.selectedExercise = exercise
        }
    }
}
</script>

<style scoped>
p {
    text-align: center;
}
.body {
    padding: 0.5rem;
    max-width: 500px;
    margin: auto;
}
.selected-exercise {
    background-color: whitesmoke;
    border-color: rgb(197, 197, 197);
}
</style>
