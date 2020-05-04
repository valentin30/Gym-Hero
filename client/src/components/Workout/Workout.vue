<template>
    <div class="body">
        <div class="workout">
            <ImageHeader>
                <p>Workout</p>
            </ImageHeader>
            <ExerciseHeader />
            <ExerciseCard
                v-for="exercise in $store.getters.exercises"
                :exercise="exercise"
                :key="exercise.name"
            >
                <p slot="header">{{ exercise.exercise.name }}</p>
                <p slot="info">{{ exercise.sets }}</p>
                <p slot="info">{{ exercise.reps }}</p>
                <p slot="info">{{ exercise.weight }}kg</p>
            </ExerciseCard>
            <AddButton />
        </div>
        <button @click="save">
            <i class="material-icons">done_all</i>
            <p>Save Workout</p>
            <i class="material-icons">done_all</i>
        </button>
    </div>
</template>

<script>
import AddButton from './AddButton'
import ExerciseCard from './ExerciseCard'
import ImageHeader from './Image-Header'
import Header from '../General/Header'
import ExerciseHeader from './ExerciseHeader'
export default {
    components: {
        Header,
        ExerciseHeader,
        ImageHeader,
        AddButton,
        ExerciseCard,
    },
    methods: {
        save() {
            console.log(this.$store.getters.exercises)
            fetch('http://localhost:3000/workout', {
                method: 'POST',
                headers: {
                    Authorization: this.$store.getters.token,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ exercises:  this.$store.getters.exercises}),
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                })
        },
    },
}
</script>

<style scoped>
.body {
    padding: 0.5rem;
    border-radius: 20px;
    margin-bottom: 3rem;
}
.workout {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
}
button {
    width: 100%;
    background-color: rgb(0, 155, 135);
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    padding: 0.5rem;
    margin: 1.5rem 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
button i {
    padding: 0 1rem;
}
button p{
    margin: 0.2rem 0 0;
}
</style>
