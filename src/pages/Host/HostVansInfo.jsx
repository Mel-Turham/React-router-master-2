import { useOutletContext } from 'react-router-dom';

const HostVansInfo = () => {
	const { singleVan } = useOutletContext();
	return (
		<section className='host-van-detail-info'>
			<h4>
				Name: <span>{singleVan.name}</span>
			</h4>
			<h4>
				Category: <span> {singleVan.type}</span>
			</h4>
			<h4>
				Description: <span>{singleVan.description}</span>
			</h4>
			<h4>
				Visibility: <span>Public</span>
			</h4>
		</section>
	);
};
export default HostVansInfo;
