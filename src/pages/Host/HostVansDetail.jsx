import { NavLink, Outlet, Link, useLoaderData } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
import image from '../../assets/images/Image-not-found.png';
import { getHostVans } from '../../utils/api/api';
import { requireAuth } from '../../utils/auth/auth';

export const loader = async ({ params }) => {
	await requireAuth();
	return getHostVans(params.id);
};

const HostVansDetail = () => {
	const singleVan = useLoaderData();
	// const [singleVan, setSingleVan] = useState(null);
	const activeLink = {
		textDecoration: 'underline',
		fontWeight: 'bold',
		color: '#161616',
	};

	// useEffect(() => {
	// 	const fetchHostVan = async () => {
	// 		try {
	// 			const req = await axios(`/api/vans/${id}`);
	// 			const res = await req.data;
	// 			setSingleVan(res);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	// 	fetchHostVan();
	// }, [id]);

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
							<i className={`van-type ${singleVan.type}`}>{singleVan.type}</i>
							<h3>{singleVan.name}</h3>
							<h4>
								${singleVan.price} <span>/day</span>
							</h4>
						</div>
					</div>
					<nav className='host-van-detail-nav'>
						<NavLink
							to='.'
							end
							style={({ isActive }) => (isActive ? activeLink : null)}
						>
							Details
						</NavLink>
						<NavLink
							style={({ isActive }) => (isActive ? activeLink : null)}
							to={`pricing`}
						>
							Pricing
						</NavLink>
						<NavLink
							style={({ isActive }) => (isActive ? activeLink : null)}
							to={`photos`}
						>
							Photos
						</NavLink>
					</nav>
					<Outlet context={{ singleVan }} />
				</article>
			) : (
				<>Loading...</>
			)}
		</section>
	);
};
export default HostVansDetail;
