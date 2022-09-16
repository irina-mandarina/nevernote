// const app = Vue.createApp({
export default {
    data() {
        return {
            username: "blank",
            logged: false,
            registered: true,
            showMyProfile: false,
            showAllNotes: false,
            showLogIn: true,
            showSignIn: false
        }
    },
    methods: {
        logIn(username) {
            this.username = username.username
            this.logged = true
            this.showAllNotes = true
            this.showSignIn = false
            this.showMyProfile = false
            this.showLogIn = false
        },
        goToMyProfile() {
            this.showAllNotes = false
            this.showMyProfile = true
        },
        logOut() {
            this.logged = false
            this.showLogIn = true
            this.showSignIn = false
            this.showAllNotes = false
            this.showMyProfile = false
        },
        goToAllNotes() {
            this.showMyProfile = false
            this.showAllNotes = true
        },
        goToLogIn() {
            this.showSignIn = false
            this.showLogIn = true
            this.logged = false
        },
        goToSignIn() {
            this.showSignIn = true
            this.showLogIn = false
            this.logged = false
            this.registered = false
        }
    },
    template: `
        <log-in v-if="showLogIn" @log-in="logIn" @go-to-sign-in="goToSignIn"></log-in>
        
        <sign-in v-if="showSignIn && !registered" @log-in="logIn" @go-to-log-in="goToLogIn"></sign-in>

        <div v-if="logged && showAllNotes">

            <navigation @go-to-all-notes="goToAllNotes" @go-to-my-profile="goToMyProfile"></navigation>
            <h1 id="wellcome-msg">Wellcome {{ username }}</h1>
            <div class="container">
                <note-list :username="username"> </note-list>   
            </div>

            <profile v-if="showMyProfile" @log-out="logOut"></profile>
            
        </div>
    `
}