<template>
    <div class="img-header">
        <img
            v-if="number > 0.5"
            src="https://lh3.googleusercontent.com/proxy/WwWZ-rq03B5SojcBPQ2e2eiEnDjRXXBxpvGuyfr8DVNr94mEr4O1EEoByGKpu27LtW3sUL3Zcnvm8ZEwWfSqZPNcdrgqyHbiZhLQBDLGoIb7fs2ks88sif5ZgdbqxkVAxpP1BIrdn-AoI8bqdw"
            alt=""
        />
        <img
            v-else
            src="https://static.wixstatic.com/media/a38d60_d0871de6b32542a7a8ad77edf27ad585~mv2_d_2725_2048_s_2.jpg/v1/fill/w_640,h_222,al_c,q_80,usm_0.66_1.00_0.01/a38d60_d0871de6b32542a7a8ad77edf27ad585~mv2_d_2725_2048_s_2.webp"
            alt=""
        />
        <p>Workout</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: Math.random(),
        }
    },
}
</script>

<style scoped>
div {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
img {
    width: 100%;
    margin-bottom: -4rem;
    border-radius: inherit;
}
p {
    font-size: 2rem;
    color: white;
    font-weight: bold;
    z-index: 1.6;
    margin: 0;
    padding: 0 0 0.5rem 1rem;
}
</style>
