<template>
    <div class="body">
        <p>{{header}}</p>
        <p>{{message}}</p>
        <div class="footer">
            <button @click="closeMessage">Okay</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed:{
        ...mapGetters(['isAuth','renderMessage','message','header']),
    },
    methods: {
        ...mapActions(['closeMessage'])
    },
}
</script>

<style scoped>
.body {
    position: fixed;
    top: 25%;
    left: 1rem;
    right: 1rem;
    margin: auto;
    max-width: 400px;
    z-index: 3;
    background-color: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
p:first-of-type {
    font-size: 1.4rem;
    margin: 0;
    font-weight: bold;
}
p:last-of-type {
    margin: 0;
    padding: 1.5rem 0;
}
button {
    margin: 0;
    width: fit-content;
    border: none;
    background-color: white;
    color: rgb(0, 155, 135);
    font-size: 1.1rem;
    font-weight: bold;
}
.footer {
    width: 100%;
    text-align: end;
}
</style>
