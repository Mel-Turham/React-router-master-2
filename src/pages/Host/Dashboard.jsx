import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
	return (
		<>
			<h1>Host page there</h1>
			<div>
				<Link to='/host/reviews'>Reviews</Link>{' '}
				<Link to='/host/income'>Income</Link>
			</div>
			<Outlet />
		</>
	);
};
export default Dashboard;
