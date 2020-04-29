<template>
    <div class="component-body">
    <div>
        <img :src="exercise.imageUrl" alt="img">
    </div>
    <div class="content">
        <p>{{exercise.name}}</p>
        <p>{{muscles}}</p>
    </div>
</div>
</template>

<script>
export default {
    props:['exercise'],
    computed:{
        muscles(){
            let string = ''
            this.exercise.muscles.forEach(element => {
                string += element + ' '
            });
            return string
        }
    }
}
</script>

<style scoped>
    .component-body{
        display: flex;
        flex-direction: row;
        border: 1px solid white;
        padding: 1rem 0.5rem 0.5rem;
        border-radius: 10px;
        margin: auto;
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
        text-align: left;
        font-size:1.2rem;
        margin: 0;
        color:#333;
    }
    p:last-of-type{
        font-size: 1rem;
        color:#999;
    }
</style>

