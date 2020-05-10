<template>
    <div class="body">
        <h1>Sign up</h1>
        <form @submit.prevent="signup">
            <input type="text" placeholder="Name" v-model="name" required />
            <input type="email" placeholder="Email" v-model="email" required />
            <input
                type="password"
                placeholder="Password"
                v-model="password"
                :class="password.length > 5 || password.length === 0 || 'wrong'"
                required
            />
            <input
                type="password"
                placeholder="Confirm Password"
                v-model="confirmPassword"
                :class="match || 'wrong'"
                required
            />
            <p class="error" v-if="!match">Password don't match!</p>
            <p class="error" v-if="password.length < 5 && password.length > 0">
                Password should be atleast 5 symbols!
            </p>
            <button type="submit" :disabled="!clickable">Sign up</button>
        </form>
        <p>
            Already have an account.
            <router-link to="/login">Login.</router-link>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        signup() {
            fetch('http://localhost:3000/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message) {
                        if ((data.status = 422)) {
                            this.email = null
                        }
                        return this.$store.dispatch('displayMessage', {
                            header: 'Oops!',
                            message: data.message + '.',
                        })
                    }
                    const now = new Date()
                    const oneHour = 60 * 60 * 1000
                    const expirationDate = new Date(now.getTime() + oneHour)
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('expiresIn', expirationDate)
                    this.$store.dispatch('autoLogout')
                    this.$store.commit('setToken', data.token)
                    this.$store.commit('setUser', data.user)
                    this.$router.push('/profile/settings?new=true')
                })
        },
    },
    computed: {
        clickable() {
            let d =
                !this.name ||
                !this.email ||
                this.password.length < 5 ||
                this.confirmPassword !== this.password
            return !d
        },
        match() {
            let m = this.password.includes(this.confirmPassword)
            return m
        },
    },

}
</script>

<style scoped>
.body {
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    text-align: center;
    margin: auto;
}
h1 {
    margin-top: 1rem;
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #777;
    font-weight: 300;
}
button {
    border-radius: 4px;
    margin-top: 0rem;
    border: none;
    padding: 0.75rem;
    font-size: 1.1rem;
    color: white;
    background-color: rgb(0, 155, 135);
    width: 90%;
}
a {
    color: rgb(0, 155, 135);
    font-weight: bold;
}
input {
    margin-top: 0;
    margin-bottom: 1rem;
}
.wrong {
    border: 1px solid tomato;
}
.error {
    color: tomato;
    margin: 5px;
    margin-top: -10px;
    padding-left: 5%;
    text-align: start;
    font-size: 1rem;
}
</style>
