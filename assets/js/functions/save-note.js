export function saveNote(username, title, content, date) {
    let allNotesCount = 0
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith("note-")) {
            allNotesCount++
        }
    }
    localStorage.setItem('note-' + allNotesCount, JSON.stringify({id: allNotesCount, user: username, title: title, content: content, date: date}));
}

var noteCount = 0
export function getNoteList(username) {
    let noteList = []
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith("note-")) {
            let noteInfo
            try {
                noteInfo = JSON.parse(localStorage.getItem(key))
                if (noteInfo.user === username) {
                    noteList.push(noteInfo)
                    noteCount++
                }
            }
            catch (e) {
                console.log(e)
            }
        }
    }
    return noteList
}

export function getNoteCount(username) {
    return noteCount
}

export function deleteNoteFromStorage(noteId) {
    localStorage.removeItem("note-" + noteId)
}