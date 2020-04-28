<template>
    <div>
        <router-view @message=" $emit('message',$event) ">
        </router-view>
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
