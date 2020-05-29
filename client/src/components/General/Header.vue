<template>
    <div>
        <p>
            <slot></slot>
        </p>
    </div>
</template>

<style scoped>
div {
    padding: 0.5rem;
    background-color: rgb(0, 155, 135);
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
p {
    padding: 0.3rem 0.5rem 0;
    margin: 0;
    color: white;
    font-size: 1rem;
    font-weight: bold;
}
</style>
