import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './Components/Layout';
import Host from './pages/Host';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/host' element={<Host />} />
					<Route path='/host/dashboard' element={<Dashboard />} />
					<Route path='/host/reviews' element={<Reviews />} />
					<Route path='/host/income' element={<Income />} />
					<Route path='/vans' element={<Vans />} />
					<Route path='/vans/:id' element={<VanDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
