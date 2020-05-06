<template>
    <div class="settings-body">
        <p class="settings-header">How much do you weight?</p>
        <input type="number" class="settings-input" v-model="weight" />
        <button class="settings-button" @click="submit" :disabled="!weight">
            Confirm
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weight: this.$store.getters.user.weight,
        }
    },
    methods: {
        submit() {
            fetch('http://localhost:3000/user/weight', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: this.$store.getters.token,
                },
                body: JSON.stringify({ weight: this.weight }),
            })
                .then(response => response.json())
                .then(json => {
                    if (json.message) {
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
