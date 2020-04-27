<template>
    <div @click="$emit('close',false)"></div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
div {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: white;
    opacity: 0.6;
    /* background: rgba(0, 0, 0, 0.75); */
    z-index: 2;
    pointer-events: all;
    display: block;
}
</style>
