<template>
    <div class="body">
        <div class="workout">
            <ImageHeader />
            <ExerciseHeader />
            <ExerciseCard v-for="exercise in $store.getters.exercises" :key="exercise._id">
                <p slot="header">{{exercise.exercise.name}}</p>
                <p slot="info">{{exercise.sets}}</p>
                <p slot="info">{{exercise.reps}}</p>
                <p slot="info">{{exercise.weight}}kg</p>
            </ExerciseCard>
            <AddButton/>
        </div>        
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
        ExerciseCard
    },
}
</script>

<style scoped>
.body {
    padding: 0.5rem;
    border-radius: 20px;
}
.workout {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
}

</style>
