const getVans = async () => {
	const res = await fetch('/api/vans');
	if (!res.ok) {
		throw {
			message: 'Failed to fetch vans',
		};
	}
	const data = await res.json();
	return data;
};

export { getVans };
