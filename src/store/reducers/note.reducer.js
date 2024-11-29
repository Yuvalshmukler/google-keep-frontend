export const SET_NOTES = 'SET_NOTES'
export const SET_NOTE = 'SET_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'
export const ADD_NOTE = 'ADD_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const ADD_NOTE_MSG = 'ADD_NOTE_MSG'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    notes: [],
    note: null,
    isLoading: false,

}

export function noteReducer(state = initialState, action) {
    var newState = state
    var notes
    switch (action.type) {
        case SET_NOTES:
            newState = { ...state, notes: action.notes }
            console.log('newState',newState);
            
            break
        case SET_NOTE:
            newState = { ...state, note: action.note }
            break
        case REMOVE_NOTE:
            const lastRemovednote = state.notes.find(note => note._id === action.noteId)
            notes = state.notes.filter(note => note._id !== action.noteId)
            newState = { ...state, notes, lastRemovednote }
            break
        case ADD_NOTE:
            newState = { ...state, notes: [...state.notes, action.note] }
            break
        case UPDATE_NOTE:
            console.log('state.notes',action);
            notes = state.notes.map(note => (note._id === action.note._id) ? action.note : note)
            
            newState = { ...state, notes }
            // console.log('newState',newState);
            
            break
        case ADD_NOTE_MSG:
            newState = { ...state, note: { ...state.note, msgs: [...state.note.msgs || [], action.msg] } }
            break
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
    }
    return newState
}

// unitTestReducer()

function unitTestReducer() {
    var state = initialState
    const note1 = { _id: 'b101', vendor: 'note ' + parseInt(Math.random() * 10), msgs: [] }
    const note2 = { _id: 'b102', vendor: 'note ' + parseInt(Math.random() * 10), msgs: [] }

    state = noteReducer(state, { type: SET_notes, notes: [note1] })
    console.log('After SET_notes:', state)

    state = noteReducer(state, { type: ADD_note, note: note2 })
    console.log('After ADD_note:', state)

    state = noteReducer(state, { type: UPDATE_note, note: { ...note2, vendor: 'Good' } })
    console.log('After UPDATE_note:', state)

    state = noteReducer(state, { type: REMOVE_note, noteId: note2._id })
    console.log('After REMOVE_note:', state)

    const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
    state = noteReducer(state, { type: ADD_note_MSG, noteId: note1._id, msg })
    console.log('After ADD_note_MSG:', state)

    state = noteReducer(state, { type: REMOVE_note, noteId: note1._id })
    console.log('After REMOVE_note:', state)
}

