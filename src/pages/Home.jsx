import { Link } from 'react-router-dom';
const Home = () => {
	return (
		<div className='home-container'>
			<h1>You got the travel plans, we got the trave vans.</h1>
			<p>And adventure to your life by joining the #vanlife movement.</p>
			<p>Rent the perfect van to make your perfect road trip</p>
			<Link to='/vans'>Find your van</Link>
		</div>
	);
};
export default Home;
