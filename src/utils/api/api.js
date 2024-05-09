import axios from 'axios';

const getVans = async (id) => {
	const url = id ? `/api/vans/${id}` : '/api/vans';
	const res = await axios(url);
	const data = await res.data;
	return data;
};

const getHostVans = async (id) => {
	const url = id ? `/api/vans/${id}` : '/api/vans?_start=0&_limit=3';
	const res = await axios(url);
	const data = await res.data;
	return data;
};
const loginUser = async (userInfo) => {
	const res = await fetch('/api/login', {
		method: 'post',
		body: JSON.stringify(userInfo),
	});

	const data = await res.json();

	return data;
};
export { getVans, getHostVans, loginUser };
