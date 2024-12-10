import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { HeaderSearch } from './HeaderSerach'
import menu from '../../public/svg/menu.svg'

export function AppHeader() {
	const headerRef = useRef(null)
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()

	useEffect(() => {
		const handleScroll = () => {
			headerRef.current.classList.add('scrolled')
			if (window.scrollY === 0) headerRef.current.classList.remove('scrolled')
		}

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [])

	async function onLogout() {
		const navigate = useNavigate()

		try {
			await logout()
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}
	}

	return (
		<header ref={headerRef} className="app-header full">
			<div className='menu-logo-container'>
				<img className='menu' src={menu} alt="" />
				<NavLink to="/" className="logo">
					<img src="../../public/img/LOGO.png" />
					<h1>Keep</h1>
				</NavLink>
			</div>
			<HeaderSearch />
		
		</header>
	)
}
