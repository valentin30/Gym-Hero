<template>
    <div class="body-el">
        <Spinner v-if="!workouts" />
        <WorkoutCard
            v-else
            v-for="workout of workouts"
            :key="workout._id"
            :workout="workout"
        />
    </div>
</template>

<script>
import WorkoutCard from '../components/Workout/WorkoutCard'
import Spinner from '../components/General/Spinner'
export default {
    components: {
        Spinner,
        WorkoutCard,
    },
    data() {
        return {
            workouts: null,
        }
    },
    created() {
        fetch('http://localhost:3000/workout', {
            headers: {
                Authorization: this.$store.getters.token,
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json.workouts.length === 0) {
                    setTimeout(() => {
                        this.workouts = json.workouts
                        this.$store.dispatch('displayMessage', {
                            header: 'Oops!',
                            message:
                                "Looks like you haven't logged any workouts.",
                        })
                    }, 1000)
                } else {
                    this.workouts = json.workouts.reverse()
                }
            })
    },
}
</script>

<style scoped>
.body-el {
    margin: auto auto 3rem;
    width: 100%;
    padding: 0.5rem;
}
</style>
