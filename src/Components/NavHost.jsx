import { Link } from 'react-router-dom';

const NavHost = () => {
	return (
    <nav className='host-nav'>
			<Link to='/host'>Dashboard</Link>
			<Link to='/host/reviews'>Reviews</Link>
			<Link to='/host/income'>Income</Link>
		</nav>
	);
};
export default NavHost;
