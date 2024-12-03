import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AddNoteExpand } from './addNoteExpand'
import { AddNoteNarrow } from './addNoteNarrow'

export function AddNoteInput() {
    const count = useSelector(storeState => storeState.userModule.count)
    const [isExpand, setIsExpand] = useState(false)
    const location = useLocation()
    const isShown = location.pathname === '/'
    console.log(location.pathname);

    useEffect(() => {

    })

    function onExpand() {
        console.log('hey expandddd');

        setIsExpand(true)
    }
    return (
        <section className="add-note-input">
            {isShown &&
                <div>
                    {isExpand ?
                        <AddNoteExpand />
                        :
                        <AddNoteNarrow onExpand={onExpand} />
                    }
                </div>}
        </section>
    )
}