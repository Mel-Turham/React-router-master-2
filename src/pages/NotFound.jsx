import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<section className='not-found-container'>
			<h1>Sorry, the page you were is looking for was not found</h1>
			<Link to='/' className='link-button'>
				Return to home
			</Link>
		</section>
	);
};
export default NotFound;
