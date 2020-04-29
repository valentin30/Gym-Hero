<template>
    <div class="body">
        <Spinner v-if="!exercises" />
        <template v-else>
            <p class="settings-header">Select an exercise</p>
            <section >
                <Exercise @click.native="selected = exercise" :class="{'selected': selected === exercise}" v-for="exercise in exercises" :key="exercise.name" :exercise="exercise"/>
            </section>
            <div class="sets">
                <input type="number" placeholder="Sets" v-model="sets" />

                <p
                    @click="setsType = 'Straight'"
                    :class="{ selected: setsType === 'Straight' }"
                    class="settings-header radio"
                >
                    Straight
                </p>
                <p
                    @click="setsType = 'Ramped'"
                    :class="{ selected: setsType === 'Ramped' }"
                    class="settings-header radio"
                >
                    Ramped
                </p>
            </div>
            <div class="reps-weight">
                <template v-for="set in setsCount">
                    <div :key="set">
                        <p v-if="setsType === 'Ramped'" class="settings-text">
                            set:{{ set }}
                        </p>
                        <input type="number" placeholder="Reps" />
                        <input type="number" placeholder="Weight" />
                    </div>
                </template>
            </div>
            <div class="buttons">
                <button class="success">Add</button>
                <button class="reject">Cancel</button>
            </div>
        </template>
    </div>
</template>

<script>
import Spinner from '../General/Spinner'
import Exercise from '../Exercise/Exercise'
import Header from '../General/Header'
export default {
    components: {
        Spinner,
        Exercise,
        Header
    },
    created(){
        fetch('http://localhost:3000/exercise',{
            headers:{
                Authorization: this.$store.getters.token
            }
        })
            .then(response => response.json())
            .then(json => {
                if(json.message){
                    this.$store.dispatch('displayMessage', {
                            header: 'Hey!',
                            message: json.message + '.',
                        })
                    return this.$router.go(-1)
                }
                console.log(json)
                this.exercises = json.exercises
            })
    },
    data() {
        return {
            setsType: 'Straight',
            sets: null,
            exercises: null,
            selected:null
        }
    },
    computed: {
        setsCount() {
            if (this.setsType === 'Ramped') {
                return +this.sets
            } else {
                return 1
            }
        },
    },
}
</script>

<style scoped>
.bigger{
    font-size: 0.1rem;
}
.sets {
    width: 100%;
    display: flex;
    padding-right: 1.1rem;
    justify-content: flex-end;
}
.reps-weight p {
    display: inline-block;
}
.sets input {
    margin: 0;
    margin-right: 1rem;
}
.reps-weight div{
    display: flex;
    justify-content: flex-end;
    padding-right: 0.7rem;
    width: 100%;
}
p{
    text-align: center;
}
.body {
    /* text-align: center; */
    padding: 0.5rem;
    max-width: 500px;
    margin: auto;
}
input {
    max-width: 100px;
    margin: 0.5rem;
}
button {
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    background-color: white;
}
.success {
    color: rgb(0, 155, 135);
}
.reject {
    color: tomato;
    margin-left: 1rem;
}
.radio {
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    padding: 0.5rem 1rem;
    display: inline-block;
    margin: 0;
    border-radius: 4px;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
    border: 1px solid white;
}
.selected {
    background-color: whitesmoke;
    border-color: rgb(207, 207, 207);
    color: rgb(0, 155, 135);
}
section{
    margin-bottom: 1rem;
    max-height: 200px;
    overflow: scroll;
}
.buttons {
    width: fit-content;
    float: right;
    padding: 1rem;
}
</style>
