<template>
    <div @click="display = !display" class="outer">
        <ExerciseCard :exercise="exercise.exercise" :selected="null"/>
    </div>
</template>

<script>
import ExerciseCard from '../Exercise/ExerciseCard'
export default {
    components:{
        ExerciseCard
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
.outer{
    padding: 0.5rem;
    margin: 0.5rem 0.5rem 0;
}
</style>
