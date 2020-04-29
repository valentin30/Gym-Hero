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
        <button @click="submitChange" class="settings-button" :disabled="!image">Confirm</button>
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
                if(json.message){
                    return this.$store.dispatch('displayMessage', {
                            header: 'Oops!',
                            message: json.message + '.'
                        })
                }
                console.log(json)
                this.$store.commit('setUser',json.user)
                this.$router.go(-1)
            })
        },
        processFile($event) {
            this.image = event.target.files[0]
        },
    },
}
</script>

<style>
.settings-body {
    max-width: 400px;
    text-align: center;
    margin: auto;
}
.settings-header {
    font-size: 1.6rem;
    color: #555;
}
.settings-text {
    color: #555;
}
.settings-input {
    width: 100%;
}
.settings-button {
    width: 100%;
    background-color: rgb(0, 155, 135);
    color: white;
    border: none;
    padding: 0.75rem;
    margin-top: 1rem;
    border-radius: 4px;
    font-size: 1.1rem;
}
</style>
