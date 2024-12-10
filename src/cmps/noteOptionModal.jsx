import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import { useClickOutside } from '../customHooks/useClickOutside'

export function NoteOptionsModal({ onOptionsModalClick, isOpen, toggleModal, buttonRef }) {
    const modalRef = useRef(null);
    const options = ['Delete note', 'Add label', 'Add drawing', 'Make a copy']

    useClickOutside(modalRef, (ev) => {
        // console.log(ev);
        
        toggleModal(ev,'more', false);
    })

    return (
        <section ref={modalRef} className="option-modal">
            {options.map((option) => (
                <button
                    key={option}
                    onClick={(event) => onOptionsModalClick(option)}
                >
                    {option}
                </button>
            ))}
        </section>
    )
}