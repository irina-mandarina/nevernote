// SignIinComponent
import {isTaken, isValidUsername, isValidPassword, saveUserInfo} from '../functions/user-registration.js';
export default {
    data() {
        return {
            name: "Name",
            age: "16",
            address: "Oklahoma", 
            username: "Your username",
            password: "Password"
        }   
    },
    methods: {
        registerUser({name, age, address, username, password}) {
            if (age < 10) {
                toastr["error"]("You must be at least 10yo to register.")
            }
            else if (!isValidUsername(username)) {
                toastr["error"]("The username you enterered contains invalid characters.")
            }
            else if (isTaken(username)) {
                toastr["error"]("This username is already taken.")
            }
            else if (!isValidPassword(password)) {
                toastr["error"]("The entered password is not valid. Use at least 4 characters and 1 number.")
            }
            else {
                saveUserInfo(name, age, address, username, password)
                this.$emit('logIn', {username, password})
            }
        },
        goToLogIn() {
            this.$emit('goToLogIn')
        }
    },
    template: `
        <div class="center">
            <div class="sign-up-container">
                <img class="sign-up-img" src="assets/images/login_img.png"/>
                <input type="text" class="sign-up-input" v-model="name" v-bind:placeholder="name">
                <input type="number" class="sign-up-input" v-model="age" v-bind:placeholder="age">
                <input type="text" class="sign-up-input" v-model="address" v-bind:placeholder="address">
                <input type="text" class="sign-up-input" v-model="username" v-bind:placeholder="username">
                <input type="password" class="sign-up-input" v-model="password" v-bind:placeholder="password">
                <button class="button sign-up-button" @click="registerUser({name, age, address, username, password})">Sign up</button>
                <button class="transparent-button">
                    <h4 @click="goToLogIn">
                        I already have an account.
                    </h4>
                </button>
            </div>
        </div>
    `
}