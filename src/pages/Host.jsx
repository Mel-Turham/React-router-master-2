import { Link } from 'react-router-dom';
const Host = () => {
	return (
		<>
			<h1>Host page there</h1>
			<div>
				<Link to='/host/dashboard'>Dashboard</Link>
        {' '}
				<Link to='/host/reviews'>Reviews</Link>
        {" "}
				<Link to='/host/income'>Income</Link>
			</div>
		</>
	);
};
export default Host;
