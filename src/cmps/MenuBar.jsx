import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function MenuBar() {
    const [isOpen, setIsOpen] = useState(false)





    return <article className="menu-bar">
        <section>
            {isOpen && <span>Notes</span>}
            <img src="../../public/svg/lamp.svg" alt="" />
        </section>
        <section>
            {isOpen && <span>Reminders</span>}
            <img src="../../public/svg/remind.svg" alt="" />
        </section>
        <section>
            {isOpen && <span>Edit labels</span>}
            <img src="../../public/svg/pencil.svg" alt="" />
        </section>
        <section>
            {isOpen && <span>Bin</span>}
            <img src="../../public/svg/bin.svg" alt="" />
        </section>
    </article>
}