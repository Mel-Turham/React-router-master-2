import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
	return (
		<div className='site-wrapper'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
export default Layout;
