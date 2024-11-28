import { Link } from 'react-router-dom'
import { NoteTxt } from '../cmps/NoteTxt'
import { useState } from 'react';
import { NoteEditor } from '../cmps/NoteEditor'

export function NotePreview({ note }) {
    const [isEditorShown, setIsEditorShown] = useState(false)

    function MouseOver(isEditorShown) {
        setIsEditorShown(isEditorShown)

    }
    return <article style={note.style} onMouseOver={() => MouseOver(true)} onMouseOut={() => MouseOver(false)} className="preview">
        {<NoteEditor />}
        <DynamicCmp type={note.type} info={note.info}>

        </DynamicCmp>

    </article>
}

function DynamicCmp(props) {
    switch (props.type) {
        case 'NoteTxt':
            return <NoteTxt {...props} />
        // case 'note-todos':
        //     return <NoteTodos {...props} />
        // case 'note-img':
        //     return <NoteImg {...props} />
    }
}
