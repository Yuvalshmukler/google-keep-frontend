import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { HeaderSearch } from './HeaderSerach'
import menu from '../../public/svg/menu.svg'

export function AppHeader() {
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()

	async function onLogout() {	const navigate = useNavigate()

		try {
			await logout()
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}
	}

	return (
		<header className="app-header full">
			<div className='menu-logo-container'>
				<img className='menu' src={menu} alt="" />
				<NavLink to="/" className="logo">
					<img src="../../public/img/LOGO.png" />
					<h1>Keep</h1>
				</NavLink>
			</div>
			<HeaderSearch />
			<nav>
				<NavLink to="about">About</NavLink>
				{/* <NavLink to="car">Cars</NavLink> */}
				<NavLink to="chat">Chat</NavLink>
				<NavLink to="review">Review</NavLink>

				{user?.isAdmin && <NavLink to="/admin">Admin</NavLink>}

				{!user && <NavLink to="login" className="login-link">Login</NavLink>}
				{user && (
					<div className="user-info">
						<Link to={`user/${user._id}`}>
							{/* {user.imgUrl && <img src={user.imgUrl} />} */}
							{user.fullname}
						</Link>
						{/* <span className="score">{user.score?.toLocaleString()}</span> */}
						<button onClick={onLogout}>logout</button>
					</div>
				)}
			</nav>


		</header>
	)
}
