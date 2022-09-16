// NoteComponent
export default {
    props: [
        'id',
        'title', 
        'content',
        'date'
    ],
    data () {
        return {
            noteId: this.id
        }
    },
    methods: {
        deleteNote() {
            this.$emit('deleteNote', this.id)
        }
    },
    template: `
        <div id="note" class="note-container">
            <button class="note-options" @click="deleteNote()">x</button>
            <br>
            <div>
                <h3> {{ title }} </h3>
                <p class="note-timestamp">
                    {{ date }}
                </p>
                <p> 
                    {{ content }}
                </p>
            </div>
        </div>
    `
}