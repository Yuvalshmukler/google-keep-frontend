import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export function HeaderSearch() {
    // const [filterToEdit, setFilterToEdit] = useState()

    // useEffect(() => {
    //     setFilterBy(filterToEdit)
    // }, [filterToEdit])

    // function handleChange(ev) {
    //     const type = ev.target.type
    //     const field = ev.target.name
    //     let value

    //     switch (type) {
    //         case 'text':
    //         case 'radio':
    //             value = field === 'sortDir' ? +ev.target.value : ev.target.value
    //             if (!filterToEdit.sortDir) filterToEdit.sortDir = 1
    //             break
    //         case 'number':
    //             value = +ev.target.value || ''
    //             break
    //     }
    //     setFilterToEdit({ ...filterToEdit, [field]: value })
    // }
    return (
        <section className="header-search">
            <form action="form-search">
                <img src='../../public/svg/LOGO.png' alt="" />
                <input
                    type="text"
                    name='txt'
                    placeholder="Search"
                />
                {/* <img src="../../public/img/search.svg" alt="" srcset="" /> */}
                </form>

        </section>
    )
}