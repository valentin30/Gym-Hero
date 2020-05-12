<template>
    <div class="settings-body">
        <p class="settings-header">What's your name?</p>
        <input type="text" class="settings-input" v-model="name" />
        <button class="settings-button" @click="submit" :disabled="!name">
            Confirm
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: this.$store.getters.user.name,
        }
    },
    methods: {
        submit() {
            fetch('http://localhost:3000/user/name', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: this.$store.getters.token,
                },
                body: JSON.stringify({ name: this.name }),
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message) {
                        if (json.status === 403) {
                            return this.$store.dispatch('logout')
                        }
                        return this.$store.dispatch('displayMessage', {
                            header: 'Oops!',
                            message: json.message + '.',
                        })
                    }
                    this.$store.commit('setUser', json.user)
                    this.$router.go(-1)
                })
        },
    },
}
</script>
