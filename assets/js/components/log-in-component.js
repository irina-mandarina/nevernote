// LoginComponent
import {validLoginInfo, } from '../functions/user-log-in.js';
export default {
    data() {
        return {
            // name: "Name",
            username: "Your username",
            password: "Password"
        }   
    },
    methods: {
        checkLoginInfo({username, password}) {
            if (validLoginInfo(username, password)) {
                this.$emit('logIn', {username, password})   
            }
        },
        goToSignIn() {
            this.$emit('goToSignIn')
        }
    },
    template: `
            <div class="center">
            <div class="login-container">
                <img class="login-img" src="assets/images/login_img.png"/>
                <br>
                <input type="text" class="login-input" v-model="username" v-bind:placeholder="username">
                <br>
                <input type="text" class="login-input" v-model="password" v-bind:placeholder="password">
                <br>
                <button class="button login-button" @click="checkLoginInfo({username, password})">Log in</button>
                
                <br>
                <button class="transparent-button">
                    <h4 @click="goToSignIn">
                        I don't have an account yet.
                    </h4>
                </button>
            </div>
        </div>
    `
}