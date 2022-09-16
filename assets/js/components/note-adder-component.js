// NoteAdderComponent
//import {saveNote} from '../functions/save-note.js';
export default {
    data () {
        return {
            title: "A new note",
            content: "Enter some text.",
            date: ""
        }
    },
    methods: {
        addNote({title, content}) {
            let today = new Date()
            let date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate()
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            let dateTime = date + ' ' + time
            this.date = dateTime
            this.$emit('emitAppendNewNote', {title, content, date: dateTime})
        }
    },
    template: `
        <div id="create-note" class="note-container">
            <div>
                <input v-model="title" type="text" v-bind:placeholder="title">
                <br>
                <textarea v-model="content" type="text" class="text-input" v-bind:placeholder="content"> </textarea>
                <br>
                <button class="button" @click="addNote({title, content})">Add to notes</button>
            </div>
        </div>
    `
}