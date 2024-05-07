import { useOutletContext } from 'react-router-dom';
const Photos = () => {
	const { singleVan } = useOutletContext();
	return (
		<img
			src={singleVan.imageUrl}
			alt={singleVan.name}
			title={singleVan.name}
			loading='lazy'
			className='host-van-detail-image'
		/>
	);
};
export default Photos;
