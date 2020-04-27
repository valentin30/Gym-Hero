<template>
    <nav>
        <ul>
            <router-link v-if="mainRoute" tag="li" to="/posts"
                ><i class="material-icons">whatshot</i></router-link
            >
            <li v-else @click="$router.go(-1)">
                <i class="material-icons">arrow_back</i>
            </li>
            <li v-if="isAuth">
                <button @click="$emit('open', true)">
                    <i class="material-icons">menu</i>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['isAuth']),
        mainRoute() {
            let a = this.$route.path.split('/')
            if (a.length > 2) {
                return false
            } else {
                return true
            }
        },
    },
}
</script>

<style scoped>
nav {
    left: 0;
    top: 0;
    position: fixed;
    width: 100%;
    height: fit-content;
    z-index: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
ul {
    display: flex;
    justify-content: space-between;
    background-color: rgb(0, 155, 135);
}
li {
    display: block;
    color: white;
    text-decoration: none;
    padding: 14px 14px 4px;
}
.material-icons:first-of-type {
    font-size: 2rem;
}
button {
    padding: 0 2px;
    text-decoration: none;
    border: none;
    background-color: inherit;
    color: inherit;
}
</style>
