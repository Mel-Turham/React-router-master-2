import { useParams, NavLink, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import image from '../../assets/images/Image-not-found.png';

const HostVansDetail = () => {
	const { id } = useParams();
	const [singleVan, setSingleVan] = useState(null);

	useEffect(() => {
		const fetchHostVan = async () => {
			try {
				const req = await axios(`/api/vans/${id}`);
				const res = await req.data;
				setSingleVan(res);
			} catch (error) {
				console.log(error);
			}
		};
		fetchHostVan();
	}, [id]);

	return (
		<section>
			<Link className='back-button ' to='..' relative='path'>
				&#8592; <span>Back to all vans</span>
			</Link>
			{singleVan ? (
				<article className='host-van-detail-layout-container '>
					<div className='host-van-detail'>
						<img
							src={singleVan?.imageUrl || image}
							alt={singleVan.name}
							loading='lazy'
							title={singleVan.name}
						/>
						<div className='host-van-detail-info-text'>
							<i className={`van-type ${singleVan.type}`}>
								{singleVan.type}
							</i>
							<h3>{singleVan.name}</h3>
							<h4>
								${singleVan.price} <span>/day</span>
							</h4>
						</div>
					</div>
					<nav className='host-van-detail-nav'>
						<NavLink
							className={({ isActive }) => (isActive ? 'active-link' : null)}
							to={`/host/vans/${id}`}
						>
							Details
						</NavLink>
						<NavLink to={`/host/vans/${id}/pricing`}>Pricing</NavLink>
						<NavLink to={`/host/vans/${id}/photos`}>Photos</NavLink>
					</nav>
					<Outlet />
				</article>
			) : (
				<>Loading...</>
			)}
		</section>
	);
};
export default HostVansDetail;
