import { getName, getAge, getAddress } from "../functions/user-info.js";

// const dpp = Vue.createApp({
export default {
    data() {
        return {
            username: null,
            name: null,
            age: null,
            address: null,
            logged: false,
            showView: 'logIn'
        }
    },
    methods: {
        logIn(username) {
            this.logged = true;
            this.username = username.username
            this.showView = 'noteList'
            this.name = getName(this.username)
            this.age = getAge(this.username)
            this.address = getAdress(this.username)
        },
        logOut() {
            this.logged = false
            this.username = null
            this.showView = 'logIn'
        }
    },
    template: `
        <log-in v-if="showView === 'logIn'" @log-in="logIn" @go-to-sign-up="this.showView = 'signUp'"></log-in>
        
        <sign-up v-if="showView === 'signUp'" @log-in="logIn" @go-to-log-in="this.showView = 'logIn'"></sign-up>

        <div v-if="logged">

            <navigation @go-to-all-notes="this.showView = 'noteList'" @go-to-my-profile="this.showView = 'profile'"></navigation>

            <profile :name="name" :username="username" v-if="showView === 'profile'" @log-out="logOut"></profile>

            <note-list v-if="showView === 'noteList'" :username="username"></note-list>  
        </div>
        
    `
}