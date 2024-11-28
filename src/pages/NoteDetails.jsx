import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadNote, addNoteMsg } from '../store/actions/note.actions'


export function NoteDetails() {

  const {noteId} = useParams()
  const note = useSelector(storeState => storeState.noteModule.note)

  useEffect(() => {
    loadNote(noteId)
  }, [noteId])

  async function onAddNoteMsg(noteId) {
    try {
        await addNoteMsg(noteId, 'bla bla ' + parseInt(Math.random()*10))
        showSuccessMsg(`Note msg added`)
    } catch (err) {
        showErrorMsg('Cannot add note msg')
    }        

}

  return (
    <section className="note-details">
      {/* <Link to="/note">Back to list</Link> */}
      <h1>Note Details</h1>
      {note && <div>
        <h3>{note.vendor}</h3>
        <h4>${note.price}</h4>
        <pre> {JSON.stringify(note, null, 2)} </pre>
      </div>
      }
      <button onClick={() => { onAddNoteMsg(note._id) }}>Add note msg</button>

    </section>
  )
}