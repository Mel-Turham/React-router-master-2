import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';

const App = () => {
	return (
		<>
			<header>
				<Link to='/' className='site-logo'>
					#Vanlife
				</Link>
				<nav>
					<Link to='/about'>About</Link>
					<Link to='/vans'>Vans</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/vans' element={<Vans />} />
				<Route path='/vans/:id' element={<VanDetail />} />
			</Routes>
		</>
	);
};
export default App;
