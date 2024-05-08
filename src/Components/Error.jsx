import { useRouteError } from 'react-router-dom';
const Error = () => {
	const error = useRouteError();
	const { message } = error;
	return (
		<h1
			style={{
				textAlign: 'center',
				margin: '4rem 0',
				fontWeight: '300',
				fontSize: '1.5rem',
			}}
		>
			{message}
		</h1>
	);
};
export default Error;
