<template>
    <div>
        <router-view @message="$emit('message',$event)"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    
}
</script>
