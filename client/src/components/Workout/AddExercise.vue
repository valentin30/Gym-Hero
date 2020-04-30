<template>
    <div class="body">
        <Spinner v-if="!allExercises" />
        <template v-else>
            <div class="head">
                <p class="settings-header">Select an exercise</p>
                <div class="search">
                    <i class="material-icons">search</i>
                    <input
                        type="text"
                        placeholder="Searching for an exercise?"
                        v-model="filter"
                    />
                </div>
            </div>
            <div class="scroll">
                <Exercise
                    v-for="exercise in filtered"
                    @click.native="
                        $event.target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                        })
                    "
                    :class="{
                        'selected-exercise':
                            $store.getters.selected === exercise,
                    }"
                    :key="exercise.name"
                    :exercise="exercise"
                />
            </div>
        </template>
    </div>
</template>

<script>
import Spinner from '../General/Spinner'
import Exercise from '../Exercise/Exercise'
export default {
    components: {
        Spinner,
        Exercise,
    },
    created() {
        fetch('http://localhost:3000/exercise', {
            headers: {
                Authorization: this.$store.getters.token,
            },
        })
            .then(response => response.json())
            .then(json => {
                if (json.message) {
                    this.$store.dispatch('displayMessage', {
                        header: 'Hey!',
                        message: json.message + '.',
                    })
                    return this.$router.go(-1)
                }
                console.log(json)
                this.allExercises = json.exercises
            })
    },
    data() {
        return {
            allExercises: null,
            filter: '',
        }
    },
    computed: {
        filtered() {
            return this.allExercises.filter(e => e.name.includes(this.filter))
        },
    },
}
</script>

<style scoped>
.head {
    position: fixed;
    top: 3.5rem;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 500px;
    background-color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 1.5;
}
p {
    text-align: center;
    margin-top: 2.5rem;
}
.body {
    padding: 0.5rem;
    max-width: 500px;
    margin: 8.25rem auto 1rem;
}
.search {
    border: 1px solid #777;
    border-radius: 20px;
    margin: 1rem 1rem 0.2rem;
    display: flex;
    align-items: center;
}
.search input {
    padding: 0.7rem 0.5rem 0.55rem;
    border: none;
    border-radius: 20px;
    margin: 0;
    color: #777;
}
.search i {
    margin-left: 0.75rem;
    color: #777;
}
.selected-exercise {
    background-color: whitesmoke;
    border-color: rgb(197, 197, 197);
}
</style>
