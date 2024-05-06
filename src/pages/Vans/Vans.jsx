import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Vans = () => {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		const fetchVans = async () => {
			try {
				const req = await axios('/api/vans');
				const res = req.data;
				setVans(res);
			} catch (error) {
				console.log(error.message);
			}
		};

		fetchVans();
	}, []);

	const vanElements = vans.map((van) => (
		<Link to={`/vans/${van.id}`} key={van.id}>
			<div className='van-tile'>
				<img
					alt={van.name}
					src={van.imageUrl}
					loading='lazy'
					title={van.name}
				/>
				<div className='van-info'>
					<h3>{van.name}</h3>
					<p>
						${van.price}
						<span>/day</span>
					</p>
				</div>
				<i className={`van-type ${van.type} selected`}>{van.type}</i>
			</div>
		</Link>
	));

	return (
		<section className='van-list-container'>
			<h1>Explore our van options</h1>
			<div className='van-list'>{vanElements}</div>
		</section>
	);
};
export default Vans;
