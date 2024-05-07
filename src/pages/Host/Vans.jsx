import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image from '../../assets/images/Image-not-found.png';

const HostVans = () => {
	const [hostVans, setHostVans] = useState([]);

	useEffect(() => {
		const fetchVansHost = async () => {
			try {
				const req = await axios('/api/vans?_start=0&_limit=3');
				const res = req.data;
				setHostVans(res);
			} catch (error) {
				console.log(error);
			}
		};
		fetchVansHost();
	}, []);

	return (
		<>
			<h2 className='host-vans-title'>Your listed vans</h2>
			<div className='host-vans-list'>
				{hostVans.map((hostVans) => {
					return (
						<Link
							to={`/host/vans/${hostVans.id}`}
							className='host-van-single'
							key={hostVans.id}
						>
							<img
								src={hostVans?.imageUrl || image}
								alt={hostVans.name}
								title={hostVans.name}
								loading='lazy'
							/>
							<div className='host-van-info'>
								<h3>{hostVans.name}</h3>
								<p>
									${hostVans.price} <span>/day</span>
								</p>
							</div>
						</Link>
					);
				})}
			</div>
		</>
	);
};
export default HostVans;
