<template>
    <div class="exercise">
        <div>
            <img :src="`${url}/${exercise.imageUrl}`" alt="img" />
        </div>
        <div class="content">
            <p>{{ exercise.name }}</p>
            <p>{{ muscles }}</p>
        </div>
        <div class="arrow">
            <i v-if="selected === exercise" class="material-icons"
                >keyboard_arrow_up</i
            >
            <i v-else class="material-icons">keyboard_arrow_down</i>
        </div>
    </div>
</template>

<script>
export default {
    props: ['exercise', 'selected'],
    data() {
        return {
            url: process.env.VUE_APP_API_URL,
        }
    },
    computed: {
        muscles() {
            let string = ''
            this.exercise.muscles.forEach(element => {
                string += element + ' '
            })
            return string
        },
    },
}
</script>

<style scoped>
.exercise {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}
.content {
    display: flex;
    flex-direction: column;
    margin-left: 0.25rem;
}
img {
    max-width: 45px;
    border-radius: 50%;
}
.content p {
    text-align: left;
    font-size: 1rem;
    margin: 0;
    color: rgb(0, 155, 135);
}
.content p:last-of-type {
    font-size: 1rem;
    color: #999;
}
.arrow {
    flex-grow: 1;
}
i {
    color: rgb(0, 155, 135);
    float: right;
    padding: 0 0.5rem;
}
</style>
