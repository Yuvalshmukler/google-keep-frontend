import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import palette from '../../public/svg/palette.svg'
import image1 from '../../public/svg/image1.svg'
import archive from '../../public/svg/archive.svg'
import collabrate from '../../public/svg/collabrate.svg'
import { ColorPalette } from './ColorPalette';
// import palette from '../../public/svg/palette.svg'
import { faPalette, faImage, faFileArrowDown, faEllipsisVertical, faUserPlus } from '@fortawesome/free-solid-svg-icons';
export function NoteEditor({ onUpdateNote, note }) {
    // const count = useSelector(storeState => storeState.userModule.count)
    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState(null)
    const buttonRef = useRef(null)

    function toggleModal(modalType, isModalOpen) {
        console.log('isModalOpen', isModalOpen);
        !isModalOpen ? setIsOpen((prevState => !prevState)) : setIsOpen(isModalOpen)
        // setIsOpen(isModalOpen)
        console.log('isOpen', isOpen);
        setModalType(modalType)

    }
    function onColorClick(color) {
        console.log('color', color);
        const noteToSave = { ...note, style: { backgroundColor: color } }
        console.log('noteToSave', noteToSave);
        onUpdateNote(noteToSave)

    }
    return (
        <section className="note-editor">
            <button><img src={collabrate} alt="" /></button>
            <button
                title='Background options'
                ref={buttonRef}
                onClick={() => toggleModal('color')}>
                <img src={palette} />
            </button>
            <button title='Add image'><img src={image1} alt="" /></button>
            <button title='Archive'><img src={archive} alt="" /></button>
            <button title='More'><FontAwesomeIcon icon={faEllipsisVertical} /></button>
            {isOpen && modalType === 'color' && <ColorPalette buttonRef={buttonRef} isOpen={isOpen} onColorClick={onColorClick} toggleModal={toggleModal} />}
        </section>
    )
}