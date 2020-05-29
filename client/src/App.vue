<template>
    <div id="app">
        <router-view />

        <Nav v-if="isAuth && mainRoute"></Nav>
        <TopBar @open="isOpen = $event" />
        <v-touch @swipeleft="isOpen = false">
            <transition
                enter-active-class="animated slideInLeft"
                leave-active-class="animated fadeOutLeftBig"
            >
                <SlideMenu v-if="isOpen" @close="isOpen = $event" />
            </transition>
        </v-touch>
        <transition
            enter-active-class="animated fadeInDown"
            leave-active-class="animated fadeOutUpBig"
        >
            <Message v-if="renderMessage" />
        </transition>

        <transition
            enter-active-class="animated slideInRight"
            leave-active-class="animated slideOutRight"
        >
            <Backdrop v-if="isOpen" @close="isOpen = $event" />
        </transition>
        <transition
            enter-active-class="animated slideInUp"
            leave-active-class="animated slideOutDown"
        >
            <Backdrop
                v-if="renderMessage"
                @close="$store.dispatch('closeMessage')"
            />
        </transition>
        <v-touch @swiperight="isOpen = true">
            <div class="swipe-area"></div>
        </v-touch>
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
.swipe-area {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 25px;
    /* background: fuchsia; */
    z-index: 4;
}
body {
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    background-color: white;
}
#app {
    margin: 4.5rem auto 0;
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
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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
.settings-body {
    max-width: 400px;
    text-align: center;
    margin: auto;
}
.settings-header {
    font-size: 1.6rem;
    color: #555;
}
.settings-text {
    color: #555;
}
.settings-input {
    width: 100%;
}
.settings-button {
    width: 100%;
    background-color: rgb(0, 155, 135);
    color: white;
    border: none;
    padding: 0.75rem;
    margin-top: 1rem;
    border-radius: 4px;
    font-size: 1.1rem;
}
</style>
