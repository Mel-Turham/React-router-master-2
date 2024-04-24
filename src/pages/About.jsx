import HeroAboutImage from '../../src/assets/images/about-hero.png';
import {Link} from 'react-router-dom'
const About = () => {
	return (
		<main>
			<img
				className='about-hero-image'
				src={HeroAboutImage}
				alt='Hero about image'
				loading='lazy'
			/>
			<div className='about-page-content'>
				<h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
				<p>
					Our mission is to enliven your road trip with the perfect travel van
					rental. Our vans are recertified before each trip to ensure your
					travel plans can go off without a hitch. (Hitch costs extra 😉)
				</p>
				<p>
					Our team is full of vanlife enthusiasts who know firsthand the magic
					of touring the world on 4 wheels.
				</p>
			</div>
			<div className='about-page-cta'>
				<h2>Your destination is waiting. Your van is ready</h2>
				<Link to='/vans' className='link-button'>
					Explore our vans
				</Link>
			</div>
		</main>
	);
};
export default About;
