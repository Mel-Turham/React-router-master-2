import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import image from '../../assets/images/Image-not-found.png';

const Vans = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [vans, setVans] = useState([]);
	const typeFilter = searchParams.get('type');

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

	const vansFilter = typeFilter
		? vans.filter((van) => van.type.toLowerCase() === typeFilter)
		: vans;

	const vanElements = vansFilter.map((van) => (
		<Link
			to={van.id}
			key={van.id}
			state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
		>
			<div className='van-tile'>
				<img
					alt={van.name}
					src={van?.imageUrl || image}
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
			<div className='van-list-filter-buttons'>
				{/* <Link to='?type=simple' className='van-type simple'>
					Simple
				</Link>
				<Link to='?type=luxury' className='van-type luxury'>
					Luxury
				</Link>
				<Link to='?type=rugged' className=' van-type rugged'>
					Rugged
				</Link>

				<Link to='.' className='van-type clear-filters'>
					Clear vans
				</Link> */}

				<button
					className={`van-type simple ${
						typeFilter === 'simple' ? 'selected' : null
					}`}
					onClick={() => setSearchParams('?type=simple')}
				>
					Simple
				</button>
				<button
					className={`van-type luxury ${
						typeFilter === 'luxury' ? 'selected' : null
					}`}
					onClick={() => setSearchParams('?type=luxury')}
				>
					Luxury
				</button>
				<button
					className={`van-type rugged ${
						typeFilter === 'rugged' ? 'selected' : null
					}`}
					onClick={() => setSearchParams('?type=rugged')}
				>
					{' '}
					Rugged
				</button>
				{typeFilter ? (
					<button
						className='van-type clear-filters'
						onClick={() => setSearchParams('')}
					>
						Clear vans
					</button>
				) : null}
			</div>
			<div className='van-list'>{vanElements}</div>
		</section>
	);
};
export default Vans;
