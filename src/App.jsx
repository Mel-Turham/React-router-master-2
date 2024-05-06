import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './Components/Layout';

import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* parent road nav and footer component  */}
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/vans' element={<Vans />} />
					<Route path='/vans/:id' element={<VanDetail />} />
					
					{/* host nesting */}
					<Route path='/host' element={<Dashboard />}>
						<Route path='/host/reviews' element={<Reviews />} />
						<Route path='/host/income' element={<Income />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default App;
