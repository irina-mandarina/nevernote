// const dpp = Vue.createApp({
export default {
    data() {
        return {
            username: null,
            logged: false,
            views: [ // component combinations
                'logIn',
                'signIn',
                'profile',
                'noteList'
            ],
            showView: 0
        }
    },
    methods: {
        logIn(username) {
            this.logged = true;
            this.username = username.username
            this.displayComponent('noteList')
        },
        displayComponent(comp) {
            for (let viewIndex = 0; viewIndex < this.views.length; viewIndex++) {
                if (this.views[viewIndex] === comp) {
                    this.showView = viewIndex
                }
            }
        },
        shouldDisplay(comp) {
            for (let viewIndex = 0; viewIndex < this.views.length; viewIndex++) {
                if (this.views[viewIndex] === comp) {
                    return viewIndex === this.showView
                }
            }
        },
        logOut() {
            this.logged = false
            this.username = null
            this.displayComponent('logIn')
        }
    },
    template: `
        <log-in v-if="shouldDisplay('logIn')" @log-in="logIn" @go-to-sign-in="displayComponent('signIn')"></log-in>
        
        <sign-in v-if="shouldDisplay('signIn')" @log-in="logIn" @go-to-log-in="displayComponent('logIn')"></sign-in>

        <div v-if="logged">

            <navigation @go-to-all-notes="displayComponent('noteList')" @go-to-my-profile="displayComponent('profile')"></navigation>

            <profile :username="username" v-if="shouldDisplay('profile')" @log-out="logOut"></profile>

            <note-list v-if="shouldDisplay('noteList')" :username="username"></note-list>  
        </div>
        
    `
}