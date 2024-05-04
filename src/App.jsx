import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';

const App = () => {
	return (
		<>
			<header>
				<Link to='/' className='site-logo'>
					#Vanlife
				</Link>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
					<Link to='/vans'>Vans</Link>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/vans' element={<Vans />} />
			</Routes>
		</>
	);
};
export default App;
