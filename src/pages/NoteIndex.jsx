import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { loadNotes, addNote, updateNote, removeNote, addNoteMsg } from '../store/actions/note.actions'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { noteService } from '../services/note'
import { userService } from '../services/user'

import { NoteList } from '../cmps/NoteList'
// import { NoteFilter } from '../cmps/NoteFilter'

export function NoteIndex() {

    const [filterBy, setFilterBy] = useState(noteService.getDefaultFilter())
    const notes = useSelector(storeState => storeState.noteModule.notes)
    const isLoading = useSelector(storeState => storeState.noteModule.isLoading)

    useEffect(() => {
        // loadNotes(filterBy)
        try {
            loadNotes()
        } catch (err) {
            showErrorMsg('Cannot load notes!')
        }
        console.log(notes);

    }, [filterBy])

    async function onRemoveNote(noteId) {
        try {
            await removeNote(noteId)
            showSuccessMsg('Note removed')
        } catch (err) {
            showErrorMsg('Cannot remove note')
        }
    }

    async function onAddNote() {
        const note = noteService.getEmptyNote()
        note.vendor = prompt('Vendor?')
        try {
            const savedNote = await addNote(note)
            showSuccessMsg(`Note added (id: ${savedNote._id})`)
        } catch (err) {
            showErrorMsg('Cannot add note')
        }
    }

    async function onUpdateNote(note) {
        console.log(note);

        try {
            const savedNote = await updateNote(note)
            showSuccessMsg(`Note updated, new speed: ${savedNote}`)
        } catch (err) {
            showErrorMsg('Cannot update note')
        }
    }

    return (

        <main className="note-index">
            <header>
                <h2>Notes</h2>
                {userService.getLoggedinUser() && <button onClick={onAddNote}>Add a Note</button>}
            </header>
            {!isLoading ? <NoteList
                notes={notes}
                onRemoveNote={onRemoveNote}
                onUpdateNote={onUpdateNote}
            /> :
                <div>
                    Loading...
                </div>
            }
        </main>
    )
}