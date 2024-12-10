import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AddNoteExpand } from './addNoteExpand'
import { AddNoteNarrow } from './addNoteNarrow'

export function AddNoteInput() {
    const [isExpand, setIsExpand] = useState(false)
    const location = useLocation()
    const isShown = location.pathname === '/'
    console.log(location.pathname);

    useEffect(() => {

    })

    function onToggleExpand(isExpand) {
        console.log('hey expandddd');

        setIsExpand(isExpand)
    }
    return (
        <section className="add-note-input">
            {isShown &&
                <div>
                    {isExpand ?
                        <AddNoteExpand onToggleExpand={onToggleExpand} />
                        :
                        <AddNoteNarrow onToggleExpand={onToggleExpand} />
                    }
                </div>}
        </section>
    )
}