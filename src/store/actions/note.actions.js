import { noteService } from '../../services/note'
import { store } from '../store'
import { ADD_NOTE, REMOVE_NOTE, SET_NOTES, SET_NOTE, UPDATE_NOTE, ADD_NOTE_MSG } from '../reducers/note.reducer'

export async function loadNotes(filterBy) {
    try {
        const notes = await noteService.query(filterBy)
        store.dispatch(getCmdSetnotes(notes))
    } catch (err) {
        console.log('Cannot load notes', err)
        throw err
    }
}

export async function loadNote(noteId) {
    try {
        const note = await noteService.getById(noteId)
        store.dispatch(getCmdSetNote(note))
    } catch (err) {
        console.log('Cannot load note', err)
        throw err
    }
}


export async function removeNote(noteId) {
    try {
        await noteService.remove(noteId)
        store.dispatch(getCmdRemoveNote(noteId))
    } catch (err) {
        console.log('Cannot remove note', err)
        throw err
    }
}

export async function addNote(note) {
    try {
        const savesNote = await noteService.save(note)
        store.dispatch(getCmdAddNote(savesNote))
        return savesNote
    } catch (err) {
        console.log('Cannot add note', err)
        throw err
    }
}

export async function updateNote(note) {
    try {
        const savedNote = await noteService.save(note)
        store.dispatch(getCmdUpdateNote(savedNote))
        return savedNote
    } catch (err) {
        console.log('Cannot save note', err)
        throw err
    }
}

export async function addNoteMsg(noteId, txt) {
    try {
        const msg = await noteService.addNoteMsg(noteId, txt)
        store.dispatch(getCmdAddNoteMsg(msg))
        return msg
    } catch (err) {
        console.log('Cannot add note msg', err)
        throw err
    }
}

// Command Creators:
function getCmdSetnotes(notes) {
    return {
        type: SET_NOTES,
        notes
    }
}
function getCmdSetNote(note) {
    return {
        type: SET_NOTE,
        note
    }
}
function getCmdRemoveNote(noteId) {
    return {
        type: REMOVE_NOTE,
        noteId
    }
}
function getCmdAddNote(note) {
    return {
        type: ADD_NOTE,
        note
    }
}
function getCmdUpdateNote(note) {
    return {
        type: UPDATE_NOTE,
        note
    }
}
function getCmdAddNoteMsg(msg) {
    return {
        type: ADD_NOTE_MSG,
        msg
    }
}

// unitTestActions()
async function unitTestActions() {
    await loadNotes()
    await addNote(noteService.getEmptyNote())
    await updateNote({
        _id: 'm1oC7',
        title: 'Note-Good',
    })
    await removeNote('m1oC7')
    // TODO unit test addNoteMsg
}
