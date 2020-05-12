<template>
    <div class="settings-body">
        <p class="settings-header">Upload a photo</p>
        <input
            @change="processFile($event)"
            name="image"
            accept="image/*"
            class="settings-input"
            type="file"
            required
        />
        <button
            @click="submitChange"
            class="settings-button"
            :disabled="!image"
        >
            Confirm
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: null,
        }
    },
    methods: {
        submitChange() {
            const formData = new FormData()
            formData.append('image', this.image)
            fetch('http://localhost:3000/user/photo', {
                method: 'PUT',
                headers: {
                    Authorization: this.$store.getters.token,
                },
                body: formData,
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
        processFile($event) {
            this.image = event.target.files[0]
        },
    },
}
</script>

<style></style>
