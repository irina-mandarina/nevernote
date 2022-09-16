// NoteListComponent
// import {saveNote} from '../functions/save-note.js';
export default {
    props: [
        'username'
    ],
    data() {
        return {
            notes: [
                {id: 0, title: "First note", content: "This is a note.", date: "13.09.2022"}
            ],
            noteCount: 1
        }
    },
    methods: {
        handleAppendNewNote({title, content, date}) {
            this.notes.push({id: this.noteCount, title, content, date})
            // saveNote(noteCount, username, title, content, date)
            noteCount++
        },
        deleteNoteFromList(id) {
            this.notes = this.notes.filter((note) => note.id !== id)
        }
    },
    template: `
        <div id="notes" class="notes-container">
            <h3> Your notes </h3>
            <note-adder @emit-append-new-note="handleAppendNewNote"></note-adder>
            <note v-for="note in notes" :id="note.id" :title="note.title" :content="note.content" :date="note.date" @delete-note="deleteNoteFromList"></note>
        </div>
    `
}