<template>
    <div id="app">
        <!-- Slot for Pages -->
        <!-- <transition
            mode="out-in"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        > -->
        <router-view />
        <!-- </transition> -->
        <!-- Slot for Pages -->
        <!--  -->
        <!-- Layout -->
        <Nav v-if="isAuth && mainRoute"></Nav>
        <TopBar @open="isOpen = $event" />
        <transition
            enter-active-class="animated slideInLeft"
            leave-active-class="animated fadeOutLeftBig"
        >
            <SlideMenu v-if="isOpen" @close="isOpen = $event" />
        </transition>
        <!-- Layout -->
        <!--  -->
        <!-- Message -->
        <transition
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUpBig"
        >
            <Message v-if="renderMessage" />
        </transition>
        <!-- Message -->
        <!--  -->
        <!-- Backdrops -->
        <transition
            enter-active-class="animated slideInRight"
            leave-active-class="animated slideOutRight"
        >
            <Backdrop v-if="isOpen" @close="isOpen = $event" />
        </transition>
        <transition
            enter-active-class="animated slideInDown"
            leave-active-class="animated slideOutUp"
        >
            <Backdrop
                v-if="renderMessage"
                @close="$store.dispatch('closeMessage')"
            />
        </transition>
        <!-- Backdrops -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TopBar from './components/Layout/TopBar'
import Nav from './components/Layout/Nav'
import SlideMenu from './components/Layout/SlideMenu'
import Backdrop from './components/General/Backdrop'
import Message from './components/General/Message'
export default {
    components: {
        Nav,
        TopBar,
        SlideMenu,
        Backdrop,
        Message,
    },
    data() {
        return {
            isOpen: false,
        }
    },
    computed: {
        ...mapGetters(['isAuth', 'renderMessage', 'message', 'header']),

        mainRoute() {
            let a = this.$route.path.split('/')
            if (a.length > 2) {
                return false
            } else {
                return true
            }
        },
    },
    created() {
        this.$store.dispatch('tryAutoLogin')
    },
}
</script>

<style>
body {
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background-color: white;
}
#app {
    margin: 4.5rem auto 2rem;
    max-width: 700px;
    width: inherit;
    display: flex;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    max-width: inherit;
}
a {
    color: inherit;
    text-decoration: none;
}
li {
    cursor: pointer;
}
button {
    cursor: pointer;
}
button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}
code {
    font-family: menlo, inconsolata, monospace;
    font-size: calc(1em - 2px);
    color: #555;
    background-color: #f0f0f0;
    padding: 0.2em 0.4em;
    border-radius: 2px;
}
* {
    box-sizing: border-box;
}
input {
    border-radius: 4px;
    border: 1px solid #999;
    padding: 0.75rem;
    margin: 0.5rem 0;
    font-size: 1.1rem;
    width: 90%;
    color: #666;
}
*:focus {
    outline: none;
}
</style>
