import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Link to='/' className='site-logo'>
				#Vanlife
			</Link>
			<nav>
        <Link to="/host">Host</Link>
				<Link to='/about'>About</Link>
				<Link to='/vans'>Vans</Link>
			</nav>
		</header>
	);
};
export default Header;
