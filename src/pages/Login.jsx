import { useLoaderData, Form } from 'react-router-dom';

import { loginUser } from '../utils/api/api';

export const loader = ({ request }) => {
	return new URL(request.url).searchParams.get('message');
};

export const action = async ({ request }) => {
	const formData = await request.formData();
	const email = formData.get('email');
	const password = formData.get('password');
  const data = await loginUser({ email, password });
  console.log(data);
	return null;
};
export default function Login() {
	const message = useLoaderData();

	return (
		<div className='login-container'>
			<h1>Sign in to your account</h1>
			{message && <h3 className='login-error'>{message}</h3>}
			<Form method='post' className='login-form'>
				<input name='email' type='email' placeholder='Email address' />
				<input name='password' type='password' placeholder='Password' />
				<button>Log in</button>
			</Form>
		</div>
	);
}
