<template>
    <div @click="display = !display" class="outer">
        <transition mode="out-in" name="component-fade">
            <div class="component-body" v-if="display" key="2">
                <div class="header">
                    <slot name="header"></slot>
                </div>
                <div class="info">
                    <slot name="info"></slot>
                </div>
            </div>
            <div class="buttons " v-else key="1">
                <button @click="$store.commit('removeExercise', exercise)">
                    Remove
                </button>
                <router-link
                    @click.native="$store.dispatch('modifyExercise', exercise)"
                    tag="button"
                    :to="{
                        path: '/workout/add-exercise',
                        query: { editing: exercise.exercise._id },
                    }"
                    >Modify</router-link
                >
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['exercise'],
    data() {
        return {
            display: true,
        }
    },
}
</script>

<style scoped>
.outer {
    border-top: 1px solid #555;
}
.component-body {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    padding-left: 1rem;
    cursor: pointer;
}
.header {
    flex-grow: 1;
    display: flex;
    justify-content: start;
    align-items: center;
}

.info {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.info p {
    min-width: 35px;
    margin: 0;
}
p {
    margin: 0;
    margin-top: 0.2rem;
}
.buttons {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
button {
    background-color: inherit;
    font-size: 1.1rem;
    color: #333;
    width: fit-content;
    border: none;
    padding: 0.19rem 0.5rem;
    color: rgb(0, 155, 135);
}
button:first-of-type {
    color: tomato;
}
.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to{
    opacity: 0;
}
</style>
