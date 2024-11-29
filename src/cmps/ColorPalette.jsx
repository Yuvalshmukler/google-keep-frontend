import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'

export function ColorPalette({ onColorClick, isOpen, toggleModal, colorButtonRef }) {
    const modalRef = useRef(null);

    const colors = [
        '#FF6F61',
        '#6B5B95',
        '#88B04B',
        '#F7CAC9',
        '#92A8D1',
        '#F5D76E',
        '#E94B3C',
        '#4AA3DF',
        '#B565A7',
        '#5B8C5A',
        '#FFB347',
        '#A2C5AC',
    ];
    const imgs = [
        '#FF6F61',
        '#6B5B95',
        '#88B04B',
        '#F7CAC9',
        '#92A8D1',
        '#F5D76E',
        '#E94B3C',
        '#4AA3DF',
        '#B565A7',
        '#5B8C5A',
    ];
    useEffect(() => {
        function handleClickOutside(event) {

            if (
                modalRef.current && !modalRef.current.contains(event.target) && // Not modal
                colorButtonRef.current && !colorButtonRef.current.contains(event.target)  // Not button
            ) {
                console.log('closeeeeeee');
                toggleModal(null, false)
                // Close modal if clicked outside
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // const count = useSelector(storeState => storeState.userModule.count)

    return (
        <section ref={modalRef} className="ColorPalette">
            <section>
                {colors.map((color) => (
                    <button
                        key={color}
                        style={{ backgroundColor: color }}
                        onClick={(event) => onColorClick(color)}
                    >
                    </button>
                ))}
            </section>
            <section>
                {imgs.map((color) => (
                    <button
                        key={color}
                        style={{ backgroundColor: color }}
                        onClick={(event) => onColorClick(event, color)}
                    >
                    </button>
                ))}
            </section>

        </section>
    )
}