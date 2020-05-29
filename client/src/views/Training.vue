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
        fetch(`${process.env.VUE_APP_API_URL}/workout`, {
            headers: {
                Authorization: this.$store.getters.token,
            },
        })
            .then(res => res.json())
            .then(json => {
                if (json.message) {
                    if (json.status === 403) {
                        return this.$store.dispatch('logout')
                    }
                    return this.$store.dispatch('displayMessage', {
                        header: 'Oops!',
                        message: json.message + '.',
                    })
                } else {
                    this.workouts = json.workouts
                        .filter(w => w.exercises.length !== 0)
                        .reverse()
                    if (this.workouts.length === 0) {
                        this.$store.dispatch('displayMessage', {
                            header: 'Oops!',
                            message:
                                "Looks like you haven't logged any workouts.",
                        })
                    }
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
