// ProfileComponent
import {getName} from '../functions/user-info.js'
export default {
    props: [
        'username',
        'name'
    ],
    data() {
    },
    methods: {
        LogOut() {
            this.$emit('LogOut')
        }
    },
    template: `
        <div class="center">
            <div class="profile-container">
                <img class="profile-img" src="assets/images/login_img.png"/>
                <h1> Hello, {{ name }}! </h1>
                <p v-bind:placeholder="username"> {{ username }} </p>
                <button class="button" @click="LogOut({username, password})">Log out</button>
            </div>
        </div>
    `
}