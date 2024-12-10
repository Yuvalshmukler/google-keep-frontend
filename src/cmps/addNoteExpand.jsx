import { useState, useEffect } from 'react'
import { NoteEditor } from './NoteEditor'
import { loadNotes, addNote, updateNote, removeNote, addNoteMsg } from '../store/actions/note.actions'
import { noteService } from '../services/note/note.service.local'
export function AddNoteExpand() {
    const [noteToAdd, setNoteToAdd] = useState(noteService.getDefaultNote())

    useEffect(() => {

    })
    function handleChange(ev) {
        const type = ev.target.type
        const field = ev.target.name
        let value = ev.target.value

        switch (type) {
            case 'text':
                console.log('type', type);
                setNoteToAdd(prevNote => ({
                    ...prevNote,
                    info: {
                        ...prevNote.info,
                        [field]: value, // Dynamically update `title` or `txt`
                    },
                }));
            case 'radio':
                // value = field === 'sortDir' ? +ev.target.value : ev.target.value
                // if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
                break
            case 'number':
                value = +ev.target.value || ''
                break
        }
        console.log('noteToAdd', noteToAdd);

        // setFilterToEdit({ ...filterToEdit, [field]: value })
    }

    function onAddNote() {
        addNote(noteToAdd)

    }
    return (
        <section className="add-note-expand">
            <form>
                <input name="title" onChange={handleChange}
                    type="text" placeholder='Title' />
                <input onChange={handleChange}
                    name="txt" type="text" placeholder='Take a note...' />

            </form>
            <NoteEditor />
            <button onClick={onAddNote} className='close-btn'> Close</button>
        </section>
    )
}