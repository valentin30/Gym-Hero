<template>
    <div class="img-header">
        <img src="../../assets/header.jpg" alt="" />
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
img {
    width: 100%;
    margin-bottom: -3.25rem;
    border-radius: inherit;
}
p {
    font-size: 1.5rem;
    width: 100%;
    color: white;
    font-weight: bold;
    z-index: 1.6;
    margin: 0;
    padding: 0 1.5rem 0.5rem;
}
</style>
