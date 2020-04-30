<template>
    <div>
        <Spinner v-if="!workouts" />

        {{ workouts }}
    </div>
</template>

<script>
import Spinner from '../components/General/Spinner'
export default {
    components: {
        Spinner,
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
                    this.workouts = json.workouts
                }
                console.log(json)
            })
    },
}
</script>
