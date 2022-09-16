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

export function updatedNoteList(username) {
    let noteList = []
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith("note-")) {
            let noteInfo
            try {
                noteInfo = JSON.parse(localStorage.getItem(key))
            }
            catch (e) {
                console.log(e)
            }
            if (noteInfo.user === username) {
                noteList.push(noteInfo)
            }
        }
    }
    return noteList
}

export function updatedNoteCount(username) {
    let noteCount = 0
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith("note-")) {
            let noteInfo
            try {
                noteInfo = JSON.parse(localStorage.getItem(key))
            }
            catch (e) {
                console.log(e)
            }
            if (noteInfo.username === username) {
               noteCount++
            }
        }
    }
    return noteCount
}

export function deleteNoteFromStorage(noteId) {
    localStorage.removeItem("note-" + noteId)
}