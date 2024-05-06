import { Outlet } from 'react-router-dom';
import NavHost from './NavHost';

const HostLayout = () => {
	return (
		<>
			<NavHost/>
			<Outlet />
		</>
	);
};
export default HostLayout;
