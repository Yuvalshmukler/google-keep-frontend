import { useState } from 'react'
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

    function onClick(modalType) {
        setIsOpen((prevState => !prevState))
        console.log('isOpen', isOpen);
        setModalType(modalType)

    }
    function onClickColor(color) {
        console.log('color', color);
        const noteToSave = { ...note, style: { backgroundColor: color } }
        console.log('noteToSave', noteToSave);
        onUpdateNote(noteToSave)

    }
    return (
        <section className="note-editor">
            <button><img src={collabrate} alt="" /></button>
            <button
                onClick={() => onClick('color')}>
                <img src={palette} />
            </button>
            <button><img src={image1} alt="" /></button>
            <button><img src={archive} alt="" /></button>
            <button><FontAwesomeIcon icon={faEllipsisVertical} /></button>
            {isOpen && modalType === 'color' && <ColorPalette onClickColor={onClickColor} />}
        </section>
    )
}