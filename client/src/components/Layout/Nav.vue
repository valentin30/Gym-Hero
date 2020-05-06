<template>
    <nav>
        <ul>
            <router-link tag="li" to="/posts"
                ><i class="material-icons">home</i></router-link
            >
            <router-link tag="li" to="/workout"
                ><i class="material-icons">fitness_center</i></router-link
            >
            <router-link tag="li" to="/training"
                ><i class="material-icons">today</i></router-link
            >
            <router-link tag="li" to="/profile"
                ><i class="material-icons">person</i></router-link
            >
        </ul>
    </nav>
</template>

<style scoped>
nav {
    margin: 0;
    padding: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
ul {
    background-color: white;
    display: flex;
}
li {
    flex-grow: 1;
    color: #555;
    text-align: center;
    padding: 10px 0 2px;
}
.router-link-active {
    background-color: rgb(0, 155, 135);
    color: white;
}
li:hover {
    background-color: rgb(0, 155, 135);
    color: white;
}
.material-icons {
    font-size: 2rem;
    align-self: center;
}
@media (min-width: 700px) {
    nav {
        display: none;
    }
}
</style>
