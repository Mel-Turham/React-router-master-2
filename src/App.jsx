import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './Components/Layout';

import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';

import HostLayout from './Components/HostLayout';
import HostVans, { loader as vansHostLoader } from './pages/Host/Vans';
import HostVansDetail, {
	loader as hostVansDetailLoader,
} from './pages/Host/HostVansDetail';
import HostVansInfo from './pages/Host/HostVansInfo';

import Pricing from './pages/Host/Pricing';
import Photos from './pages/Host/Photos';
import NotFound from './pages/NotFound';
import Error from './Components/Error';
import Login, {
	loader as loginLoader,
	action as loginAction,
} from './pages/Login';

import { requireAuth } from './utils/auth/auth';

const router = createBrowserRouter(
	createRoutesFromElements(
		// {/* parent road nav and footer component  */}
		<Route path='/' element={<Layout />} errorElement={<Error />}>
			<Route index element={<Home />} />
			<Route path='about' element={<About />} />
			<Route
				path='login'
				element={<Login />}
				loader={loginLoader}
				action={loginAction}
			/>
			<Route path='vans' element={<Vans />} loader={vansLoader} />
			<Route path='vans/:id' element={<VanDetail />} />

			{/* host nesting */}

			<Route path='host' element={<HostLayout />}>
				<Route
					index
					element={<Dashboard />}
					loader={async () => await requireAuth()}
				/>
				<Route
					path='income'
					element={<Income />}
					loader={async () => await requireAuth()}
				/>
				<Route
					path='reviews'
					element={<Reviews />}
					loader={async () => await requireAuth()}
				/>
				<Route path='vans' element={<HostVans />} loader={vansHostLoader} />

				<Route
					path='vans/:id'
					element={<HostVansDetail />}
					loader={hostVansDetailLoader}
				>
					<Route index element={<HostVansInfo />} />
					<Route
						path='pricing'
						element={<Pricing />}
						loader={async () => await requireAuth()}
					/>
					<Route
						path='photos'
						element={<Photos />}
						loader={async () => await requireAuth()}
					/>
				</Route>
			</Route>

			{/* 404 page */}
			<Route path='*' element={<NotFound />} />
		</Route>,
	),
);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
