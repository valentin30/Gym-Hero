<template>
    <div>
        <Spinner v-if="posts.length === 0" />
        <ul>
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
        fetch(`${process.env.VUE_APP_API_URL}/posts`, {
            headers: {
                Authorization: this.$store.state.auth.token,
            },
        })
            .then(response => response.json())
            .then(json => {
                if (json.message) {
                    if (json.status === 403) {
                        return this.$store.dispatch('logout')
                    }
                    return this.$store.dispatch('displayMessage', {
                        header: 'Oops!',
                        message: 'Something went wrong.',
                    })
                }
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
</style>
