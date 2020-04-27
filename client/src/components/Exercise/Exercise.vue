<template>
    <div class="component-body">
    <div>
        <img :src="exercise.img" alt="img">
    </div>
    <div class="content">
        <p>{{exercise.name}}</p>
        <p>{{exercise.usedMuscles}}</p>
    </div>
</div>
</template>

<script>
export default {
    props:['exercise']
}
</script>

<style scoped>
    .component-body{
        display: flex;
        flex-direction: row;
        margin-bottom: 0.25rem; 
    }
    .content{
        display: flex;
        flex-direction: column;
    }
    img{
        max-width: 50px;
        border-radius:50%; 
    }
    p{
        font-size:1.1rem;
        margin: 0;
        color:#333;
    }
    p:last-of-type{
        font-size: 1rem;
        color:#999;
    }
</style>

