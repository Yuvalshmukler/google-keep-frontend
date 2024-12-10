import { useState, useEffect } from 'react'
import searchPencil from '../../public/svg/searchPencil.svg'
import check from '../../public/svg/check.svg'
import addImg from '../../public/svg/addImg.svg'
export function AddNoteNarrow({ onToggleExpand }) {

    useEffect(() => {

    })

    return (
        <section onClick={() => onToggleExpand(true)} className="add-note-narrow">
            <input className='note-input' type="text" placeholder='Take a note...' />
            <div className='active-btns'>
                <img src={check} alt="" />
                <img src={searchPencil} alt="" />
                <img src={addImg} alt="" />
            </div>
        </section>
    )
}