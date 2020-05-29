<template>
    <div class="body">
        <div class="workout">
            <ImageHeader>
                <p>Workout</p>
            </ImageHeader>
            <div class="exercises" v-if="$store.getters.exercises.length > 0">
                <ExerciseCard
                    @click.native="
                        $event.target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        })
                    "
                    v-for="exercise in $store.getters.exercises"
                    :exercise="exercise"
                    :key="exercise.exercise.name"
                    :class="{
                        'selected-exercise':
                            $store.getters.viewed === exercise.exercise,
                    }"
                >
                </ExerciseCard>
            </div>
            <AddButton />
        </div>
    </div>
</template>

<script>
import AddButton from './AddButton'
import ExerciseCard from './ExerciseCard'
import ImageHeader from './Image-Header'
export default {
    components: {
        ImageHeader,
        AddButton,
        ExerciseCard,
    },
    beforeRouteLeave(to, from, next) {
        if (to.path !== '/training') {
            next()
        }
        fetch('http://192.168.1.103:3000/workout', {
            method: 'POST',
            headers: {
                Authorization: this.$store.getters.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                exercises: this.$store.getters.exercises,
            }),
        }).then(() => {
            if (to.path === '/training') {
                next()
            }
        })
    },
}
</script>

<style scoped>
.exercises {
    padding: 0.5rem;
}
p {
    margin: 0;
    margin-top: 0.19rem;
}
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
button p {
    margin: 0.2rem 0 0;
}
.selected-exercise {
    background-color: whitesmoke;
    border-color: rgb(197, 197, 197);
}
</style>
