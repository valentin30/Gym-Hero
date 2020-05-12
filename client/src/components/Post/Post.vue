<template>
    <div class="body">
        <Spinner v-if="!post" class="spinner" />
        <template v-else>
            <div>
                <img :src="post.img" :alt="post.title" />
                <h3>
                    <b>{{ post.title }}</b>
                </h3>
            </div>
            <template v-for="paragraph in post.paragraphs">
                <template v-if="paragraph.img">
                    <div :key="paragraph.title + '1'">
                        <img :src="paragraph.img" :alt="paragraph.title" />
                        <h3 class="title">
                            <b>{{ paragraph.title }}</b>
                        </h3>
                    </div>
                    <div :key="paragraph.title + '2'" class="paragraph">
                        <p>{{ paragraph.text }}</p>
                    </div>
                </template>
                <div v-else :key="paragraph.title + '3'" class="paragraph">
                    <p>
                        <b>{{ paragraph.title }}</b>
                    </p>
                    <p>{{ paragraph.text }}</p>
                </div>
            </template>
        </template>
    </div>
</template>

<script>
import Spinner from '../General/Spinner'
export default {
    components: {
        Spinner,
    },
    data() {
        return {
            post: null,
        }
    },
    created() {
        document.title = this.$route.params.id
        fetch(`http://localhost:3000/posts/${this.$route.params.id}`, {
            headers: {
                Authorization: this.$store.state.auth.token,
            },
        })
            .then(response => response.json())
            .then(json => {
                if (json.message) {
                    if(json.status === 403){
                        return this.$store.dispatch('logout')
                    }
                    return this.$store.dispatch('displayMessage', {
                        header: 'Oops!',
                        message: 'Something went wrong.',
                    })
                }
                this.post = json.post
            })
    },
}
</script>

<style scoped>
img {
    max-width: 700px;
    width: 100%;
}
h3 {
    padding: 0.75rem;
    margin: 0;
}
div {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
    display: flex;
    max-width: 700px;
    flex-direction: column;
    margin-bottom: 1.5rem;
}
.spinner {
    box-shadow: none;
}
.paragraph {
    padding: 1rem;
    font-size: 1.2rem;
    margin-bottom: 0;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
}
p {
    margin: 0;
}
.body {
    padding: 0.75rem;
    margin-bottom: 0;
    padding-bottom: 0;
    box-shadow: none;
}
@media (min-width: 768px) {
    div {
        justify-content: center;
        width: 700px;
    }
}
</style>
