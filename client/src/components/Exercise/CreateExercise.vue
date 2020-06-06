<template>
    <div class="settings-body some">
        <p class="settings-header">Choose a name for your exercise.</p>
        <input
            type="text"
            placeholder="Name"
            class="settings-input"
            v-model="name"
        />
        <p class="settings-header">Which muscles does this exercise involve?</p>
        <section class="section">
            <p
                @click="toggle(muscle)"
                class="settings-header radio"
                :class="{ selected: muscles.includes(muscle) }"
                v-for="muscle in allMuscles"
                :key="muscle"
            >
                {{ muscle }}
            </p>
        </section>
        <button
            class="settings-button"
            @click="submit"
            :disabled="!name || muscles.length === 0"
        >
            Create Exercise
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            allMuscles: [
                'Chest',
                'Back',
                'Legs',
                'Shoulders',
                'Biceps',
                'Triceps',
                'Core',
            ],
            muscles: [],
        }
    },
    methods: {
        toggle(muscle) {
            if (this.muscles.includes(muscle)) {
                this.muscles = this.muscles.filter(m => m !== muscle)
            } else {
                this.muscles.push(muscle)
            }
        },
        submit() {
            fetch(`${process.env.VUE_APP_API_URL}/exercise`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: this.$store.getters.token,
                },
                body: JSON.stringify({
                    name: this.name,
                    muscles: this.muscles,
                }),
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
                    this.$store.dispatch('displayMessage', {
                        header: 'Hey!',
                        message: 'Your exercise was successfully added.',
                    })
                    this.$router.go(-1)
                })
        },
    },
}
</script>

<style scoped>
.section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.some {
    max-width: 400px;
}
.radio {
    text-align: left;
    cursor: pointer;
    padding: 0.5rem;
    margin: 0;
    border-radius: 4px;
    font-size: 1rem;
    margin-bottom: 0.2rem;
    border: 1px solid white;
    margin: 0.25rem;
}
.selected {
    background-color: whitesmoke;
    border-color: rgb(207, 207, 207);
    color: rgb(0, 155, 135);
}
input,
button {
    width: 90%;
}
</style>
