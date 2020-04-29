<template>
    <div class="body">
        <div class="workout">
            <Header>Workout</Header>
            <ExerciseHeader />
        </div>
        {{$store.getters.exercises}}
        <router-link class="route" tag="div" to="/workout/add-exercise"
            ><p>+</p>
            <p>Add Exercise</p></router-link
        >
    </div>
</template>

<script>
import Header from '../General/Header'
import ExerciseHeader from './ExerciseHeader'
export default {
    components: {
        Header,
        ExerciseHeader,
    },
}
</script>

<style scoped>
.body {
    padding: 0.5rem;
    border-radius: 4px;
}
.workout {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
}
/* .route {
    display: flex;
    padding-left: 0.9rem;
    border-top: 1px solid #555;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
} */
</style>
