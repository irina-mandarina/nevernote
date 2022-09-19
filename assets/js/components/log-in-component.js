// LoginComponent
import {validLoginInfo, } from '../functions/user-log-in.js';
export default {
    data() {
        return {
            username: "viki",
            password: "viki1"
        }   
    },
    methods: {
        checkLoginInfo({username, password}) {
            // if (validLoginInfo(username, password) === "1") {
            //     this.username = username
            //     this.$emit('logIn', {username: this.username})   
            // }
            // else {
            //     toastr["error"](validLoginInfo(username, password))
            // }
            try {
                validLoginInfo(username, password)
            }
            catch (e) {
                toastr["error"](e.message)
            }
            this.$emit('logIn', {username: this.username})
        }
    },
    template: `
            <div class="center">
            <div class="login-container">
                <img class="login-img" src="assets/images/login_img.png"/>
                <input type="text" class="login-input" v-model="username" v-bind:placeholder="username">
                <input type="password" class="login-input" v-model="password" v-bind:placeholder="password">
                <button class="button login-button" @click="checkLoginInfo({username, password})">Log in</button>
                <button class="transparent-button">
                    <h4 @click="this.$emit('goToSignIn')">
                        I don't have an account yet.
                    </h4>
                </button>
            </div>
        </div>
    `
}