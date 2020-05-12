<template>
    <li>
        <router-link :to="{ name: 'Post', params: { id: post._id } }">
            <div>
                <img :src="post.img" :alt="post.title" />
                <h3>
                    <b>{{ post.title }}</b>
                </h3>
            </div>
        </router-link>
    </li>
</template>
<script>
export default {
    props: ['post'],
}
</script>
<style scoped>
li {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
    border-radius: 0px;
}
a {
    text-decoration: none;
    border-radius: inherit;
}
div {
    height: inherit;
    display: grid;
    border-radius: inherit;
}
img {
    width: 100%;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
h3 {
    padding: 0.75rem;
    margin: 0;
}
</style>
