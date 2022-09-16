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
            if (age < 16) {
                alert("You must be at least 16!")
            }
            else if (!isValidUsername(username)) {
                alert("username contains invalid characters")
            }
            else if (isTaken(username)) {
                alert("username is already taken")
            }
            else if (!isValidPassword(password)) {
                alert("The entered password is not valid. Use at least 4 characters and 1 number.")
            }
            else {
                // localStorage.setItem('user-' + username, JSON.stringify({name: name, age: age, address: address, username: username, password: password}));
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