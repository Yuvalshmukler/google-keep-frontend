import { useState, useEffect } from 'react'
import searchPencil from '../../public/svg/searchPencil.svg'
import check from '../../public/svg/check.svg'
import addImg from '../../public/svg/addImg.svg'
export function AddNoteNarrow({ onExpand }) {

    useEffect(() => {

    })

    return (
        <section onClick={onExpand} className="add-note-narrow">
            <input className='note-input' type="text" placeholder='Take a note...' />
                <div className='active-btns'>
                    <img src={check} alt="" srcset="" />
                    <img src={searchPencil} alt="" srcset="" />
                    <img src={addImg} alt="" srcset="" />
                </div>
        </section>
    )
}