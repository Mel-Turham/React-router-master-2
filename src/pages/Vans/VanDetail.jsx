import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useLocation } from 'react-router-dom';

const VanDetail = () => {
	const [van, setVan] = useState(null);
	const { id } = useParams();
	const location = useLocation();
	useEffect(() => {
		const vanData = async () => {
			try {
				const req = await axios(`/api/vans/${id}`);
				const res = await req.data;
				setVan(res);
			} catch (error) {
				console.log(error);
			}
		};
		vanData();
	}, [id]);

	const search = location.state?.search || '';
	const type = location.state.type;
	return (
		<div className='van-detail-container'>
			<Link className='back-button' to={`..${search}`} relative='path'>
				&#8592; <span>Back to {type ? type : 'all'} vans</span>
			</Link>
			{van ? (
				<div className='van-detail'>
					<img
						src={van.imageUrl}
						alt={van.name}
						title={van.name}
						loading='lazy'
					/>
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
					<h2>{van.name}</h2>
					<p className='van-price'>
						<span>${van.price}</span>/day
					</p>
					<p>{van.description}</p>
					<button className='link-button'>Rent this van</button>
				</div>
			) : (
				<h1>Loading...</h1>
			)}
		</div>
	);
};
export default VanDetail;
