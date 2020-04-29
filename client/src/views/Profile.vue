<template>
    <div>
        <!-- <transition
            mode="out-in"
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUpBig"
        > -->
            <router-view />
        <!-- </transition> -->
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
}
</script>

<style scoped>
div {
    width: 100%;
    padding: 0.5rem;
}
</style>
