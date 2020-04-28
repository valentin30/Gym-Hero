<template>
    <div>
        <h1>ComponentSettings</h1>        
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.query.new)
        if(this.$route.query.new === 'true'){
            this.$emit('message',{
                message: true,
                header: 'Hey!',
                text:'Here you can provide you personal information'
            })
        }
    }
}
</script>

<style scoped>
    
</style>

