import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadUsers, removeUser } from '../store/actions/user.actions'
import { useNavigate } from 'react-router'
import { loadNotes } from '../store/actions/note.actions'
import { noteService } from '../services/note/note.service.local'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { NoteList } from '../cmps/NoteList'
export function NoteArchive() {
    const notes = useSelector(storeState => storeState.noteModule.notes)
    const isLoading = useSelector(storeState => storeState.noteModule.isLoading)
    const [filterBy, setFilterBy] = useState({ ...noteService.getDefaultFilter(), isArchive: true })

    useEffect(() => {
        try {
            loadNotes(filterBy)

            // loadNotes()
        } catch (err) {
            showErrorMsg('Cannot load notes!')
        }
        console.log(notes);

    }, [])
    return <section className="note-archive">
        {!isLoading ? <NoteList
            notes={notes}
        /> :
            <div>
                Loading...
            </div>
        }
    </section>
}
