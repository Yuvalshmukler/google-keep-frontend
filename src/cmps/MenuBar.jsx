
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'

import { useState, useEffect } from 'react'

export function MenuBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [optionType, setIsOptionType] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        console.log('this is a start');

    },)

    function onClickOption(option) {
        console.log('option', option);

    }
    return <article className="menu-bar">
        <section title='Notes' onClick={() => onClickOption('notes')}>
            {<NavLink to="">
                {isOpen && <span>Notes</span>}
                <img src="../../public/svg/lamp.svg" alt="" />
            </NavLink>}

        </section>
        <section title='Reminders' onClick={() => onClickOption('reminders')}>
            {isOpen && <span>Reminders</span>}
            <img src="../../public/svg/remind.svg" alt="" />
        </section>
        <section title='Archive' onClick={() => onClickOption()}>
            {<NavLink to="archive">
                {isOpen && <span>Archive</span>}
                <img src="../../public/svg/pencil.svg" alt="" />

            </NavLink>}
        </section>
        <section title='Bin' onClick={() => onClickOption('bin')}>
            {<NavLink to="trash">
                {isOpen && <span >Bin</span>}
                <img src="../../public/svg/bin.svg" alt="" />
            </NavLink>}

        </section>
    </article>
}