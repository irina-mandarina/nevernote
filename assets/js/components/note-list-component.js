// NoteListComponent
import {saveNote, updatedNoteList, deleteNoteFromStorage, updatedNoteCount} from '../functions/save-note.js';
export default {
    props: [
        'username'
    ],
    data() {
        return {
            notes: [
                
            ],
            noteCount: 0
        }
    },
    created() {
        this.notes = updatedNoteList(this.username)
    },
    methods: {
        handleSaveNote({title, content, date}) {
            saveNote(this.username, title, content, date)
            this.noteCount = updatedNoteCount(this.username)
            this.notes = updatedNoteList(this.username)
        },
        deleteNoteFromList(id) {
            //this.notes = this.notes.filter((note) => note.id !== id)
            deleteNoteFromStorage(id)
            this.notes = updatedNoteList(this.username)
        }
    },
    template: `
        <h1 id="wellcome-msg">Wellcome {{ username }}</h1>
        <div class="container">
            <div id="notes" class="notes-container">
                <h3> Your notes </h3>
                <note-adder :username="username" @save-note="handleSaveNote"></note-adder>
                <note v-for="note in notes" :id="note.id" :title="note.title" :content="note.content" :date="note.date" @delete-note="deleteNoteFromList"></note>
            </div>
        </div>
    `
}