import { userService } from '../services/user'
import { NotePreview } from './NotePreview'

export function NoteList({ notes, onRemoveNote, onUpdateNote }) {
    return <section>
        <ul className="note-list">
            {notes.map(note =>
                <li key={note._id}>
                    <NotePreview onUpdateNote={onUpdateNote} note={note}/>
                </li>)
            }
        </ul>
    </section>
}