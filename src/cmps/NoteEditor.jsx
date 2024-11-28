import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import palette from '../../public/svg/palette.svg'
import image1 from '../../public/svg/image1.svg'
import archive from '../../public/svg/archive.svg'
import collabrate from '../../public/svg/collabrate.svg'
import { ColorPalette } from './ColorPalette';
// import palette from '../../public/svg/palette.svg'
import { faPalette, faImage, faFileArrowDown, faEllipsisVertical, faUserPlus } from '@fortawesome/free-solid-svg-icons';
export function NoteEditor() {
    // const count = useSelector(storeState => storeState.userModule.count)
    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState(null)

    function onClick(isOpen, modalType) {
        setIsOpen(isOpen)
        console.log('isOpen', isOpen);
        setModalType(modalType)
        console.log('setModalType', modalType);

    }

    return (
        <section className="note-editor">
            <button><img src={collabrate} alt="" /></button>
            <button
                onClick={() => onClick(true, 'color')}>
                <img src={palette} />
            </button>
            <button><img src={image1} alt="" /></button>
            <button><img src={archive} alt="" /></button>
            <button><FontAwesomeIcon icon={faEllipsisVertical} /></button>
            {isOpen && modalType === 'color' && <ColorPalette />}
        </section>
    )
}