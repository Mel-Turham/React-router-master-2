import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

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
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
			</Routes>

			<footer>&copy; {new Date().getFullYear()} #VanLife</footer>
		</>
	);
};
export default App;
