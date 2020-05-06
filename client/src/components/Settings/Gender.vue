<template>
    <div class="settings-body some">
        <p class="settings-header">Select your gender?</p>
        <p
            @click="gender = 'Male'"
            class="settings-header radio"
            :class="{ selected: gender === 'Male' }"
        >
            Male
        </p>
        <p
            @click="gender = 'Female'"
            class="settings-header radio"
            :class="{ selected: gender === 'Female' }"
        >
            Female
        </p>
        <button class="settings-button" @click="submit" :disabled="!gender">
            Confirm
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gender: this.$store.getters.user.gender,
        }
    },
    methods: {
        submit() {
            fetch('http://localhost:3000/user/gender', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: this.$store.getters.token,
                },
                body: JSON.stringify({ gender: this.gender }),
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

<style scoped>
.some {
    max-width: 400px;
}
.radio {
    text-align: left;
    cursor: pointer;
    padding: 0.5rem;
    margin: 0;
    border-radius: 4px;
    font-size: 1.2rem;
    border: 1px solid white;
}
.selected {
    background-color: whitesmoke;
    border-color: rgb(207, 207, 207);
    color: rgb(0, 155, 135);
}
</style>
