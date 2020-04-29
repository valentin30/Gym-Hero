<template>
    <div class="component-body">
        <div class="exercise" 
            @click="$store.commit('setSelected',exercise)"
        >
            <div>
                <img :src="exercise.imageUrl" alt="img" />
            </div>
            <div class="content">
                <p>{{ exercise.name }}</p>
                <p>{{ muscles }}</p>
            </div>
            <div class="arrow">
                <i v-if="$store.getters.selected === exercise" class="material-icons">keyboard_arrow_up</i>
                <i v-else class="material-icons">keyboard_arrow_down</i>
            </div>
        </div>
        <template v-if="$store.getters.selected === exercise">
            <div class="sets">
                <input
                    v-if="setsType === 'Ramped'"
                    type="number"
                    placeholder="Sets"
                    v-model="sets"
                />

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
                <template v-for="(set, index) in setsCount">
                    <div :key="set">
                        <p v-if="setsType === 'Ramped'">
                            {{ set }}.
                        </p>
                        <input
                            v-else
                            type="number"
                            placeholder="Sets"
                            v-model="sets"
                        />
                        <input
                            type="number"
                            placeholder="Reps"
                            v-model="reps[index]"
                        />
                        <input
                            type="number"
                            placeholder="Weight"
                            v-model="weight[index]"
                        />
                    </div>
                </template>
            </div>
            <div class="buttons">
                <button class="success" :disabled="disable" @click="submit">
                    Add
                </button>
                <button class="reject" @click="$store.commit('setSelected',exercise)">
                    Close
                </button>
            </div>
        </template>
    </div>
</template>

<script>
import Spinner from '../General/Spinner'
import Exercise from '../Exercise/Exercise'
import Header from '../General/Header'
export default {
    props: ['exercise'],

    components: {
        Spinner,
        Exercise,
        Header,
    },
    methods: {
        submit() {
            if (this.setsType === 'Ramped') {
                this.$store.dispatch('pushRampedSets', {
                    exercise: this.exercise,
                    reps: this.reps,
                    weight: this.weight,
                })
            } else {
                this.$store.dispatch('pushStraightSets', {
                    exercise: this.exercise,
                    sets: this.sets,
                    reps: this.reps[0],
                    weight: this.weight[0],
                })
            }
            this.$router.go(-1)
        },
    },
    data() {
        return {
            setsType: 'Ramped',
            sets: null,
            reps: [],
            weight: [],
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
        muscles() {
            let string = ''
            this.exercise.muscles.forEach(element => {
                string += element + ' '
            })
            return string
        },
        disable() {
            let d =
                !this.sets || this.reps.includes('') || this.weight.includes('')
            return d
        },
    },
}
</script>
<style scoped>
.component-body {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    padding: 1rem 0.5rem 0.5rem;
    border-radius: 10px;
    margin: auto;
}
.exercise {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
.content {
    display: flex;
    flex-direction: column;
}
img {
    max-width: 50px;
    border-radius: 50%;
}
.content p {
    text-align: left;
    font-size: 1.2rem;
    margin: 0;
    color: rgb(0, 155, 135);
}
.content p:last-of-type {
    font-size: 1rem;
    color: #999;
}
.arrow{
    flex-grow: 1;
}
.sets {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
    padding-right: 0.5rem;
}
.sets input {
    margin: 0;
}
.reps-weight p {
    display: inline-block;
    font-size: 1.2rem;
    margin-bottom: 0;
    margin-right: 1rem;
    color: rgb(0, 155, 135);
    font-weight: bold;
}

.reps-weight div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}
input {
    max-width: 90px;
    margin: 0.5rem 0.5rem 0 0;
}
button {
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    background-color: inherit;
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
    border: 1px solid white;
}
.selected {
    background-color: rgb(235, 235, 235);
    border-color: rgb(185, 185, 185);
    color: rgb(0, 155, 135);
}
.buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1rem 1rem 0.5rem;
}
i{
    color:rgb(0,155,135);
    float: right;
    padding: 0 0.5rem;
}
</style>
