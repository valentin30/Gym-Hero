<template>
    <div class="body">
        <h1>Login</h1>
        <form @submit.prevent="login">
            <input type="email" placeholder="Email" v-model="email" required />
            <input
                type="password"
                placeholder="Password"
                v-model="password"
                required
            />
            <button type="submit" :disabled="!email || !password">Login</button>
        </form>
        <p>
            Don't have an account?
            <router-link to="/register">Sign up</router-link>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message) {
                        if (data.status === 404) {
                            this.email = ''
                        }
                        this.password = ''
                        return this.$emit('message', {
                            message: true,
                            header: 'Oops',
                            text: data.message || 'Something went wrong',
                        })
                    }
                    console.log(data)
                    const now = new Date()
                    const oneHour = 60 * 60 * 1000
                    const expirationDate = new Date(now.getTime() + oneHour)
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('expiresIn', expirationDate)
                    this.$store.dispatch('autoLogout')
                    this.$store.commit('setToken', data.token)
                    this.$store.commit('setUser', data.user)
                    this.$router.push('/')
                })
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
    margin-top: 0.5rem;
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
</style>
