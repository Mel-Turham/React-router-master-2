import axios from 'axios';

const getVans = async () => {
	const res = await axios('/api/vans');
	const data = await res.data;
	return data;
};

export { getVans };
