import { Link } from 'react-router-dom'
import {NoteTxt} from '../cmps/NoteTxt'



export function NotePreview({ note }) {
    return <article className="preview">
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
