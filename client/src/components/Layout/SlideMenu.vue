<template>
    <div class="body">
        <div class="header">
            <button class="close" @click="$emit('close', false)">
                <i class="material-icons">clear</i>
            </button>
            <!-- <img :src="`${avatar}/${user.imageUrl}`" alt="avatar" /> -->
            <div
                class="image"
                :style="`background-image:url(${avatar}/${user.imageUrl})`"
            ></div>
            <p>
                <b>{{ user.name }}</b>
            </p>
        </div>
        <ul>
            <router-link
                @click.native="$emit('close', false)"
                tag="li"
                to="/profile/create-exercise"
            >
                <i class="material-icons">add</i>
                <p>Create Exercise</p>
            </router-link>
            <router-link
                @click.native="$emit('close', false)"
                tag="li"
                to="/posts"
            >
                <i class="material-icons">home</i>
                <p>Home</p>
            </router-link>
            <router-link
                @click.native="$emit('close', false)"
                tag="li"
                to="/workout"
            >
                <i class="material-icons">fitness_center</i>
                <p>Workout</p>
            </router-link>
            <router-link
                @click.native="$emit('close', false)"
                tag="li"
                to="/training"
            >
                <i class="material-icons">today</i>
                <p>Workout Log</p>
            </router-link>
            <router-link
                @click.native="$emit('close', false)"
                tag="li"
                to="/profile"
            >
                <i class="material-icons">person</i>
                <p>Profile</p>
            </router-link>
            <router-link
                @click.native="$emit('close', false)"
                tag="li"
                to="/profile/settings"
            >
                <i class="material-icons">settings</i>
                <p>Settings</p>
            </router-link>
            <li @click="logoutAndRedirect">
                <i class="material-icons">exit_to_app</i>
                <p>Logout</p>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            avatar: process.env.VUE_APP_API_URL,
        }
    },
    computed: {
        ...mapGetters(['user']),
    },
    methods: {
        ...mapActions(['logout']),
        logoutAndRedirect() {
            this.logout()
            this.$emit('close', false)
        },
    },
}
</script>

<style scoped>
.body {
    position: fixed;
    top: 0;
    left: 0;
    width: 75%;
    z-index: 10;
    height: 100vh;
    background-color: white;
    font-size: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.header {
    padding: 1rem 1rem 0.75rem;
    background-color: rgb(0, 155, 135);
    color: white;
    display: flex;
    flex-direction: column;
}
.header p {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    align-self: flex-start;
}
img {
    vertical-align: middle;
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.image {
    background-position: center center;
    background-size: cover;
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
button {
    background-color: white;
    border: none;
    float: left;
    padding: 0;
    font-size: 1rem;
}
.close {
    color: white;
    background-color: rgb(0, 155, 135);
    float: right;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}
.close i {
    font-size: 1.5rem;
}
ul {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 0 1rem;
}
p {
    margin: 0;
    font-size: 1rem;
}
li {
    display: flex;
    padding: 0.2rem;
}
li i {
    font-size: 1.4rem;
    padding-right: 0.5rem;
}
@media (min-width: 800px) {
    .body {
        width: 25%;
    }
}
</style>
