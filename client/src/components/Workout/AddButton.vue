<template>
    <router-link tag="div" to="/workout/add-exercise">
        <i class="material-icons">add</i>
        <p>Add Exercise</p>
    </router-link>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    border-top: 1px solid rgb(0, 187, 162);
    cursor: pointer;
}
p {
    margin: 0.07rem 0 0;
    color: rgb(0, 155, 135);
    font-size: 0.9rem;
}
i {
    font-size: 1.1rem;
    color: rgb(0, 155, 135);
}
</style>
