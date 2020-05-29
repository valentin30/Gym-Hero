<template>
    <li>
        <slot></slot>
    </li>
</template>

<style scoped>
li {
    border-top: 1px solid #333;
}
a {
    padding: 0.7rem 1rem 0.5rem;
    display: flex;
    justify-content: space-between;
}
div {
    padding: 0.6rem 1rem 0.5rem;
    display: flex;
    justify-content: space-between;
    cursor: default;
}
</style>
