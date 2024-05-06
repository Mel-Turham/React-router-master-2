import { NavLink } from 'react-router-dom';

const NavHost = () => {
	// const activeStyle = {
	// 	fontWeight: 'bold',
	// 	textDecoration: 'underline',
	// 	color: 'red',
	// };
	return (
		<nav className='host-nav'>
			<NavLink
				to='/host'
				end
				className={({ isActive }) => (isActive ? 'active-link' : null)}
			>
				Dashboard
			</NavLink>
			<NavLink
				to='/host/reviews'
				className={({ isActive }) => (isActive ? 'active-link' : null)}
			>
				Reviews
			</NavLink>

			<NavLink
				to='/host/vans'
				className={({ isActive }) => (isActive ? 'active-link' : null)}
			>
				Vans
			</NavLink>
			<NavLink
				to='/host/income'
				className={({ isActive }) => (isActive ? 'active-link' : null)}
			>
				Income
			</NavLink>
		</nav>
	);
};
export default NavHost;
