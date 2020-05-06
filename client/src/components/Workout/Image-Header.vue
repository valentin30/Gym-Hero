<template>
    <div class="img-header">
        <img src="../../assets/header.jpg" alt="" />
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: Math.random(),
        }
    },
}
</script>

<style scoped>
div {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
img {
    width: 100%;
    margin-bottom: -4.19rem;
    border-radius: inherit;
}
p {
    font-size: 2rem;
    width: 100%;
    color: white;
    font-weight: bold;
    z-index: 1.6;
    margin: 0;
    padding: 0 1.5rem 0.5rem;
}
</style>
