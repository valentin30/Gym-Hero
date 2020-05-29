<template>
    <div class="settings-body">
        <p class="settings-header">What's your height?</p>
        <input type="number" class="settings-input" v-model="height" />
        <button class="settings-button" @click="submit" :disabled="!height">
            Confirm
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            height: this.$store.getters.user.height,
        }
    },
    methods: {
        submit() {
            fetch(`${process.env.VUE_APP_API_URL}/user/height`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: this.$store.getters.token,
                },
                body: JSON.stringify({ height: this.height }),
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
