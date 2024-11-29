import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import palette from '../../public/svg/palette.svg'
import image1 from '../../public/svg/image1.svg'
import archive from '../../public/svg/archive.svg'
import collabrate from '../../public/svg/collabrate.svg'
import { ColorPalette } from './ColorPalette';
import { NoteOptionsModal } from './noteOptionModal';
import { loadNotes, addNote, updateNote, removeNote, addNoteMsg } from '../store/actions/note.actions'

// import palette from '../../public/svg/palette.svg'
import { faPalette, faImage, faFileArrowDown, faEllipsisVertical, faUserPlus } from '@fortawesome/free-solid-svg-icons';
export function NoteEditor({ onUpdateNote, note }) {
    // const count = useSelector(storeState => storeState.userModule.count)
    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState(null)
    const colorButtonRef = useRef(null)
    const OptionButtonRef = useRef(null)

    function toggleModal(modalType, isModalOpen) {
        console.log('modalType', modalType);
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
        setIsOpen(false)

    }
    function onOptionsModalClick(option) {
        switch (option) {
            case 'Delete note':
                removeNote(note._id)
                break;

            case 'Add label':

                break;

            case 'Add drawing':

                break;

            case 'Make a copy':
                const noteCopy = { ...note }
                delete noteCopy._id
                addNote(noteCopy)
                break;

            default:
                break;
        }
        setIsOpen(false)


    }
    return (
        <section className="note-editor">
            <button><img src={collabrate} alt="" /></button>
            <button
                title='Background options'
                ref={colorButtonRef}
                onClick={() => toggleModal('color')}>
                <img src={palette} />
            </button>
            <button title='Add image'><img src={image1} alt="" /></button>
            <button title='Archive'><img src={archive} alt="" /></button>
            <button
                title='More'
                ref={OptionButtonRef}
                onClick={() => toggleModal('more')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
            {isOpen && modalType === 'color' && <ColorPalette colorButtonRef={colorButtonRef} isOpen={isOpen} onColorClick={onColorClick} toggleModal={toggleModal} />}
            {isOpen && modalType === 'more' && <NoteOptionsModal OptionButtonRef={OptionButtonRef} isOpen={isOpen} onOptionsModalClick={onOptionsModalClick} toggleModal={toggleModal} />}
        </section>
    )
}