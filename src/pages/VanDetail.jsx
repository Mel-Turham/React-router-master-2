import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const VanDetail = () => {
	const [van, setVan] = useState(null);

	const { id } = useParams();
	console.log(id);

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

	return (
		<div className='van-detail-container'>
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
				<h2>Loading...</h2>
			)}
		</div>
	);
};
export default VanDetail;
