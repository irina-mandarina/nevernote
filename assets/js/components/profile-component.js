// ProfileComponent
export default {
    props: [
        'name',
        'age',
        'address',
        'username',
        'password'
    ],
    data() {
        return {
            name: this.name,
            username: ""
        }
    },
    methods: {
        LogOut() {
            this.$emit('LogOut')
        }
    },
    template: `
        <div class="profile-container">
            <img class="profile-img" src="assets/images/login_img.png"/>
            <br>
            <h1> Hello, {{ name }}! </h1>
            <p v-bind:placeholder="username"> {{ username }} </p>
            <br>
            <br>
            <button class="button" @click="LogOut({username, password})">Log out</button>
        </div>
    `
}