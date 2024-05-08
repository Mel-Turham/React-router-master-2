import { useRouteError } from 'react-router-dom';
const Error = () => {
	const error = useRouteError();

  const {message, code} = error
	console.log(error.message, error.code);
	return (
		<h1 style={{ textAlign: 'center', margin: '4rem 0' }}>
			{message}, {code}!!⚠️
		</h1>
	);
};
export default Error;
