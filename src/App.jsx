import { Routes, Route } from 'react-router-dom';

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
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/products' element={<Products />} />
		</Routes>
	);
};
export default App;
