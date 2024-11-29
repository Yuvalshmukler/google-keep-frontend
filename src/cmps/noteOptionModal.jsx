import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'

export function NoteOptionsModal({ onOptionsModalClick, isOpen, toggleModal, buttonRef }) {
    const modalRef = useRef(null);
    const options = ['Delete note', 'Add label', 'Add drawing', 'Make a copy']


    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         console.log('outside');

    //         if (
    //             modalRef.current && !modalRef.current.contains(event.target)// Not modal
    //             // Not button
    //         ) {
    //             console.log('closeeeeeee');
    //             toggleModal(null, false)
    //             // Close modal if clicked outside
    //         }
    //     }

    //     if (isOpen) {
    //         document.addEventListener('mousedown', handleClickOutside);
    //     } else {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     }

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [isOpen])

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