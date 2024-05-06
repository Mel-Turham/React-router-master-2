import { NavLink, Link } from 'react-router-dom';


const Header = () => {
	return (
		<header>
			<Link to='/' className='site-logo'>
				#Vanlife
			</Link>
			<nav>
				<NavLink
					to='/host'
					className={({ isActive }) => (isActive ? 'active-link' : '')}
				>
					Host
				</NavLink>
				<NavLink
					to='/about'
					className={({ isActive }) => (isActive ? 'active-link' : '')}
				>
					About
				</NavLink>
				<NavLink
					to='/vans'
					className={({ isActive }) => (isActive ? 'active-link' : '')}
				>
					Vans
				</NavLink>
			</nav>
		</header>
	);
};
export default Header;
