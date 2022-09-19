// NoteListComponent
import {saveNote, getNoteCount, deleteNoteFromStorage, getNoteList} from '../functions/save-note.js';
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
        this.notes = getNoteList(this.username)
        this.noteCount = getNoteCount
    },
    methods: {
        handleSaveNote({title, content, date}) {
            saveNote(this.username, title, content, date)
            this.noteCount++
            this.notes.push({id: this.noteCount, title, content, date})
            // this.noteCount = updatedNoteCount(this.username)
            // this.notes = updatedNoteList(this.username)
        },
        deleteNoteFromList(id) {
            this.notes = this.notes.filter((note) => note.id !== id)
            deleteNoteFromStorage(id)
            // this.notes = updatedNoteList(this.username)
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