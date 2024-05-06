import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './Components/Layout';

import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';

import HostLayout from './Components/HostLayout';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* parent road nav and footer component  */}
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='vans' element={<Vans />} />
					<Route path='vans/:id' element={<VanDetail />} />

					{/* host nesting */}

					<Route path='host' element={<HostLayout />}>
						<Route index element={<Dashboard />} />
						<Route path='income' element={<Income />} />
						<Route path='reviews' element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
