import { useState, useEffect } from 'react'
import { NoteEditor } from './NoteEditor'
export function AddNoteExpand() {

    useEffect(() => {

    })

    return (
        <section className="add-note-expand">
            <div>
                <input type="text" placeholder='Title' />
                <input type="text" placeholder='Take a note...' />

            </div>
            <NoteEditor />
            <button className='close-btn'> Close</button>
        </section>
    )
}