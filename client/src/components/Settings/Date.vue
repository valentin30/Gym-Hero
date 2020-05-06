<template>
    <div class="settings-body">
        <p class="settings-header">When were you born?</p>
        <input type="date" class="settings-input" v-model="dateOfBirth" />
        <button class="settings-button" @click="submit" :disabled="!dateOfBirth">
            Confirm
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dateOfBirth:this.$store.getters.user.dateOfBirth
        }
    },
    methods:{
        submit(){
            fetch('http://localhost:3000/user/date',{
                method: 'PUT',
                headers:{
                    'Content-Type':'application/json',
                    Authorization: this.$store.getters.token
                },
                body:JSON.stringify({dateOfBirth: this.dateOfBirth})
            })
                .then(response => response.json())
                .then(json => {
                    if(json.message){
                        return this.$store.dispatch('displayMessage',{
                            header:'Oops!',
                            message: json.message + '.'
                        })
                    }
                    this.$store.commit('setUser', json.user)
                    this.$router.go(-1)
                })
        }
    }
}
</script>
