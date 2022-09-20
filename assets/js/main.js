import App from './components/app.js'
import SignUpComponent from './components/sign-up-component.js'
import LogInComponent from './components/log-in-component.js'
import ProfileComponent from './components/profile-component.js'
import NavigationComponent from './components/navigation-component.js'
import NoteComponent from './components/note-component.js'
import NoteAdderComponent from './components/note-adder-component.js'
import NoteListComponent from './components/note-list-component.js'

const app = Vue.createApp(App)
app.component('SignUp', SignUpComponent);
app.component('LogIn', LogInComponent);
app.component('Profile', ProfileComponent);
app.component('Navigation', NavigationComponent);
app.component('Note', NoteComponent);
app.component('NoteList', NoteListComponent);
app.component('NoteAdder', NoteAdderComponent); 

app.mount('#app');