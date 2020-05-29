<template>
    <div class="body">
        <ImageHeader>
            <p>{{ workout.date.slice(0, 10) }}</p>
        </ImageHeader>
        <div class="content">
            <ExerciseCard
                v-for="exercise in workout.exercises"
                :key="exercise._id"
                :exercise="exercise"
                @click.native="
                    $event.target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    })
                "
                :readOnly="true"
                :class="{
                    'selected-exercise':
                        $store.getters.viewed === exercise.exercise,
                }"
            />
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
.content {
    padding: 0.7rem 0.5rem 0.5rem;
}
.body {
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    margin-bottom: 1rem;
}

.selected-exercise {
    background-color: whitesmoke;
    border-color: rgb(197, 197, 197);
}
</style>
