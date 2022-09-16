// ProfileComponent
import {getName} from '../functions/user-info.js'
export default {
    props: [
        'username'
    ],
    data() {
        return {
            name: "blank"
        }
    },
    created() {
        this.name = getName(this.username)
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
                <br>
                <h1> Hello, {{ name }}! </h1>
                <p v-bind:placeholder="username"> {{ username }} </p>
                <br>
                <br>
                <button class="button" @click="LogOut({username, password})">Log out</button>
            </div>
        </div>
    `
}