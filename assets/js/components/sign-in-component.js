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
            <div class="sign-in-container">
                <img class="sign-in-img" src="assets/images/login_img.png"/>
                <br>
                <input type="text" class="sign-in-input" v-model="name" v-bind:placeholder="name">
                <br>
                <input type="number" class="sign-in-input" v-model="age" v-bind:placeholder="age">
                <br>
                <input type="text" class="sign-in-input" v-model="address" v-bind:placeholder="address">
                <br>
                <input type="text" class="sign-in-input" v-model="username" v-bind:placeholder="username">
                <br>
                <input type="password" class="sign-in-input" v-model="password" v-bind:placeholder="password">
                <br>
                <button class="button sign-in-button" @click="registerUser({name, age, address, username, password})">Sign in</button>

                <br>
                <button class="transparent-button">
                    <h4 @click="goToLogIn">
                        I already have an account.
                    </h4>
                </button>
            </div>
        </div>
    `
}