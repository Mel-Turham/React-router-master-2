import { useCallback, useEffect, useState } from 'react';

import axios from 'axios';

const useFetchDate = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchData = useCallback(async () => {
		try {
			const req = await axios(url);
			const resp = await req.data;
			setData(resp);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, isError, isLoading };
};

export { useFetchDate };
