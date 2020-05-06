<template>
    <div class="body">
        <ImageHeader>
            <p>{{ workout.date.slice(0, 10) }}</p>
        </ImageHeader>
        <div class="content">
            <div
                class="exercise"
                v-for="exercise in workout.exercises"
                :key="exercise._id"
            >
                <div class="exercise-header">
                    <p>{{ exercise.exercise.name }}</p>
                </div>
                <div class="exercise-body">
                    <p slot="info">{{ exercise.sets }}</p>
                    <p slot="info">{{ exercise.reps }}</p>
                    <p slot="info">{{ exercise.weight }}kg</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ExerciseCard from './ExerciseCard'
import ImageHeader from './Image-Header'
export default {
    components: {
        ExerciseCard,
        ImageHeader,
    },
    props: ['workout'],
}
</script>

<style scoped>
.content * {
    cursor: default;
}
.body {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    margin-bottom: 1rem;
}
.exercise {
    border-top: 1px solid #555;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    padding-left: 1rem;
    cursor: pointer;
}
.exercise-header {
    flex-grow: 1;
    display: flex;
    justify-content: start;
    align-items: center;
}
.exercise-body {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.exercise-body p {
    min-width: 35px;
    margin: 0;
}
p {
    margin: 0;
    margin-top: 0.2rem;
}
</style>
