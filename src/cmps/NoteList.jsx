import { userService } from '../services/user'
import { NotePreview } from './NotePreview'

export function NoteList({ notes, onRemoveNote, onUpdateNote }) {
    
    function shouldShowActionBtns(note) {
        // const user = userService.getLoggedinUser()
        
        // if (!user) return false
        // if (user.isAdmin) return true
        // return note.owner?._id === user._id
    }

    return <section>
        <ul className="note-list">
            {notes.map(note =>
                <li key={note.id}>
                    <NotePreview note={note}/>
                    {shouldShowActionBtns(note) && <div className="actions">
                        {/* <button onClick={() => onUpdateNote(note)}>Edit</button>
                        <button onClick={() => onRemoveNote(note._id)}>x</button> */}
                    </div>}
                </li>)
            }
        </ul>
    </section>
}