import { useEffect, useState } from 'react';

const Vans = () => {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch('/api/van'); // Assurez-vous que l'URL correspond à celle configurée dans votre serveur MirageJS
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				console.log(data.vans);
				setVans(data.vans);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		}

		fetchData();
	}, []);

	return (
		<>
			{vans.map((van) => (
				<p key={van.id}>{van.name}</p>
			))}
		</>
	);
};
export default Vans;
