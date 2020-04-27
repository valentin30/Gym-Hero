<template>
    <div>
        <Spinner v-if="posts.length === 0" />
        <ul v-else>
            <PostPreview v-for="post in posts" :key="post.title" :post="post" />
        </ul>
    </div>
</template>

<script>
import Spinner from '../General/Spinner'
import PostPreview from './PostPreview'
export default {
    components: {
        Spinner,
        PostPreview,
    },
    data() {
        return {
            posts: [],
        }
    },
    created() {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(json => {
                if (json.message) {
                    return this.$emit('message', {
                        message: true,
                        header: 'Oops',
                        text: 'Something went wrong!',
                    })
                }
                console.log(json)
                this.posts = json.posts
            })
    },
}
</script>

<style scoped>
ul {
    display: grid;
    grid-gap: 1.5rem;
    padding: 0.75rem;
}
@media (min-width: 700px) {
    ul {
        grid-template-columns: 21rem 21rem;
        grid-column-gap: 1rem;
    }
}
</style>
