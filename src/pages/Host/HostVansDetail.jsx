import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
			{/* <Link className='back-button ' to='/host/vans'>
				&#8592; <span>Back to all vans</span>
			</Link> */}
			{singleVan ? (
				<article className='host-van-detail-layout-container '>
					<div className='host-van-detail'>
						<img
							src={singleVan.imageUrl}
							alt={singleVan.name}
							loading='lazy'
							title={singleVan.name}
						/>
						<div className='host-van-detail-info-text'>
							<i className={`van-type ${singleVan.type} selected`}>
								{singleVan.type}
							</i>
							<h3>{singleVan.name}</h3>
							<h4>
								${singleVan.price} <span>/day</span>
							</h4>
						</div>
					</div>
				</article>
			) : (
				<>Loading...</>
			)}
		</section>
	);
};
export default HostVansDetail;
