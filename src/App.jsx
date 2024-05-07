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
import HostVans from './pages/Host/Vans';
import HostVansDetail from './pages/Host/HostVansDetail';
import HostVansInfo from './pages/Host/HostVansInfo';

import Pricing from './pages/Host/Pricing';
import Photos from './pages/Host/Photos';
import NotFound from './pages/NotFound';

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
						<Route path='vans' element={<HostVans />} />

						<Route path='vans/:id' element={<HostVansDetail />}>
							<Route index element={<HostVansInfo />} />
							<Route path='pricing' element={<Pricing />} />
							<Route path='photos' element={<Photos />} />
						</Route>
					</Route>

					{/* 404 page */}
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
