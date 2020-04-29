<template>
    <div class="component-body">
        <div class="header">
            <p>Exercise</p>
        </div>
        <div class="info">
            <p>Sets</p>
            <p>Reps</p>
            <p>Weight</p>
        </div>
    </div>
</template>

<style scoped>
.component-body {
    display: flex;
    border-top: 1px solid #555;
    padding-left: 1rem;
}
.header {
    width: 50%;
    display: flex;
    justify-content: start;
}
.info {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
p {
    margin: 0;
    /* padding: 0.75rem 0 0.5rem; */
}
</style>
