import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import palette from '../../public/svg/palette.svg'
import image1 from '../../public/svg/image1.svg'
import archive from '../../public/svg/archive.svg'
import collabrate from '../../public/svg/collabrate.svg'
import { ColorPalette } from './ColorPalette';
import { NoteOptionsModal } from './noteOptionModal';
import { loadNotes, addNote, updateNote, removeNote, addNoteMsg } from '../store/actions/note.actions'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { ImgUploader } from './ImgUploader';
// import palette from '../../public/svg/palette.svg'
import { faPalette, faImage, faFileArrowDown, faEllipsisVertical, faUserPlus } from '@fortawesome/free-solid-svg-icons';
export function NoteEditor({ onUpdateNote, note }) {
    // const count = useSelector(storeState => storeState.userModule.count)
    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState(null)
    const colorButtonRef = useRef(null)
    const OptionButtonRef = useRef(null)

    function toggleModal(ev, modalType, isModalOpen) {
        ev.preventDefault()
        console.log('isOpen', !isOpen)
        console.log('isModalOpen', isModalOpen)
        console.log('modalType', modalType)
        setIsOpen((prevState => !prevState))
        // !isModalOpen ? setIsOpen(isModalOpen) : setIsOpen((prevState => !prevState))
        setModalType(modalType)
    }
    function onColorClick(color) {
        const noteToSave = { ...note, style: { backgroundColor: color } }
        onUpdateNote(noteToSave)
        setIsOpen(false)
    }
    function onOptionsModalClick(option) {
        switch (option) {
            case 'Delete note':
                var noteCopy = { ...note, isBin: true }
                onUpdateNote(noteCopy)
                break;

            case 'Add label':

                break;

            case 'Add drawing':

                break;

            case 'Make a copy':
                var noteCopy = { ...note }
                delete noteCopy._id
                addNote(noteCopy)
                break;

            default:
                break;
        }
        setIsOpen(false)


    }
    async function onArchive() {
        try {

            const noteToSave = { ...note, isArchive: true }
            onUpdateNote(noteToSave)

            showSuccessMsg(`Note updated, new speed: ${savedNote}`)
        } catch (err) {
            showErrorMsg('Cannot update note')
        }

    }
    return (
        <section className="note-editor">
            <button><img src={collabrate} alt="" /></button>
            <button
                title='Background options'
                ref={colorButtonRef}
                onClick={(ev) => toggleModal(ev, 'color')}>
                <img src={palette} />
            </button>
            <button title='Add image'>
                <ImgUploader></ImgUploader>
            </button>
            <button onClick={onArchive} title='Archive'><img src={archive} alt="" /></button>
            <button
                title='More'
                ref={OptionButtonRef}
                onClick={(ev) => toggleModal(ev, 'more')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
            {isOpen && modalType === 'color' && <ColorPalette colorButtonRef={colorButtonRef} isOpen={isOpen} onColorClick={onColorClick} toggleModal={toggleModal} />}
            {isOpen && modalType === 'more' && <NoteOptionsModal OptionButtonRef={OptionButtonRef} isOpen={isOpen} onOptionsModalClick={onOptionsModalClick} toggleModal={toggleModal} />}
        </section>
    )
}