export function saveNote(noteId, username, title, content, date) {
    localStorage.setItem('note-' + noteId, JSON.stringify({user: username, title: title, content: content, date: date}));
}