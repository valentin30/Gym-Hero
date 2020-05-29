<template>
    <div class="body">
        <Header>Profile Settings</Header>
        <ul>
            <SettingField>
                <router-link to="/profile/settings/name">
                    <p class="key">Name</p>
                    <p class="value">{{ user.name }}</p>
                </router-link>
            </SettingField>
            <SettingField>
                <div>
                    <p class="key">Email</p>
                    <p class="value">{{ user.email }}</p>
                </div>
            </SettingField>
            <SettingField>
                <router-link to="/profile/settings/photo">
                    <p class="key">Profile Photo</p>
                </router-link>
            </SettingField>
            <SettingField>
                <router-link to="/profile/settings/height">
                    <p class="key">Height</p>
                    <p class="value">{{ user.height }}cm</p>
                </router-link>
            </SettingField>
            <SettingField>
                <router-link to="/profile/settings/weight">
                    <p class="key">Weight</p>
                    <p class="value">{{ user.weight }}kg</p>
                </router-link>
            </SettingField>
            <SettingField>
                <router-link to="/profile/settings/gender">
                    <p class="key">Gender</p>
                    <p class="value">{{ user.gender }}</p>
                </router-link>
            </SettingField>
            <SettingField>
                <router-link tag="a" to="/profile/settings/date">
                    <p class="key">Date of Birth</p>
                    <p class="value">{{ user.dateOfBirth }}</p>
                </router-link>
            </SettingField>
        </ul>
    </div>
</template>

<script>
import SettingField from './SettingField'
import Header from '../General/Header'
import { mapGetters } from 'vuex'
export default {
    components: {
        SettingField,
        Header,
    },
    computed: {
        ...mapGetters(['user']),
    },
    created() {
        if (this.$route.query.new === 'true') {
            this.$store.dispatch('displayMessage', {
                header: 'Hey!',
                message: 'Here you can provide you personal information',
            })
        }
    },
}
</script>

<style scoped>
.body {
    margin-bottom: 0;
    flex-direction: column;
    border-radius: 4px;
    width: 100%;
}
ul {
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
}
.key,
.value {
    margin: 0;
    font-size: 0.9rem;
}
.value {
    color: rgb(0, 155, 135);
}
</style>
