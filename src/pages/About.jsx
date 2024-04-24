import HeroAboutImage from '../../src/assets/images/about-hero.png';
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
				<a href='#' className='link-button'>
					Explore Vans
				</a>
			</div>
		</main>
	);
};
export default About;
