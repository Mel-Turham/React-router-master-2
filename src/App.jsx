import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
	return <h1>Home page</h1>;
};

const About = () => {
	return <h1>About page</h1>;
};
const Products = () => {
	return <h1>Product page</h1>;
};

const App = () => {
	return (
		<>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/products'>Products</Link>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/products' element={<Products />} />
			</Routes>
		</>
	);
};
export default App;
