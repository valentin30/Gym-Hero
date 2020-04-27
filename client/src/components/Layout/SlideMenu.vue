<template>
    <div class="body">
        <div class="header">
            <button class="close" @click="$emit('close', false)">
                <i class="material-icons">clear</i>
            </button>
            <img
                src="https://previews.123rf.com/images/inegvin/inegvin1701/inegvin170100077/69882112-user-sign-icon-person-symbol-human-avatar-.jpg"
                alt="avatar"
            />
            <p>
                <b>{{ User.name }}</b>
            </p>
        </div>
        <ul>
            <li>
                <i class="material-icons">add</i>
                <p>Create Exercise</p>
            </li>
            <li>
                <i class="material-icons">add</i>
                <p>Create Exercise</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            User: {
                name: 'Valentin',
            },
        }
    },
}
</script>

<style scoped>
.body {
    position: fixed;
    top: 0;
    left: 0;
    width: 75%;
    z-index: 3;
    height: 100vh;
    background-color: white;
    font-size: 1.3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.header {
    padding: 1rem 1rem 0.75rem;
    background-color: rgb(0, 155, 135);
    color: white;
}
.header p {
    font-size: 1.2rem;
    padding-left: 0.2rem;
}
img {
    border-radius: 50%;
    max-width: 75px;
}
button {
    background-color: white;
    border: none;
    float: left;
    padding: 0;
    font-size: 1.5rem;
}
.close {
    color: white;
    background-color: rgb(0, 155, 135);
    float: right;
}
.close i {
    font-size: 1.8rem;
}
ul {
    display: flex;
    flex-direction: column;
    padding: 1rem 0 0 2rem;
}
p {
    margin: 0;
    font-size: 1.1rem;
}
li {
    display: flex;
    padding: 0.5rem;
}
li i {
    font-size: 1.6rem;
    padding-right: 0.5rem;
}
</style>
