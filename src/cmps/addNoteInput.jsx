import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function AddNoteInput() {
    const count = useSelector(storeState => storeState.userModule.count)
    const [isExpand, setIsExpand] = useState(false)
    const location = useLocation()
    const isShown = location.pathname === '/'
    console.log(location.pathname);

    useEffect(() => {

    })

    function onExpand() {
        setIsExpand(true)
    }
    return (
        <section className="add-note-input">
            {isShown &&
                <div>
                    {isExpand ?
                        <section className='add-note-expand'>hey!</section>
                        :
                        <section className='add-note-narrow' onClick={onExpand}>hey</section>
                    }
                </div>}
        </section>
    )
}