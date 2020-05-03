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
    align-items: center;
    padding: 0.5rem;
    padding-left: 1rem;
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
p {
    margin: 0;
    margin-top: 0.2rem;
}
</style>
