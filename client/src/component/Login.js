import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import Cookie from 'js-cookie';
const apiUrl = 'https://dilkashshaikhmahajan.herokuapp.com/api/';

const Login = () => {
	const history = useHistory();
	const [userName, setUserName] = useState('');
	const [error, setError] = useState('');
	const [token, setToken] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!token) {
			setError('Yoou must verify the captcha');
			return;
		}
		setError('');

		let loginData = {
			userName,
			password,
		};

		axios.post(`${apiUrl}login`, loginData).then((response) => {
			if (response.status === 201) {
				Cookie.set('jwt', response.data.token, { expires: 1 });
				history.push('/uploadProject');
			} else {
				setError(response.data.message);
			}
		});
	};

	return (
		<div className='container mt-15 mb-5'>
			<div
				className='alert font-capitalise alert-warning alert-dismissible fade show'
				role='alert'>
				<p className='text-capitalize'>
					If You Are <strong>Not Admin!</strong> Please Click{' '}
					<NavLink to='/' className='text-alert'>
						HERE{' '}
					</NavLink>
					<i className='fas fa-long-arrow-alt-right'></i>
				</p>
				<button
					type='button'
					className='close'
					data-dismiss='alert'
					aria-label='Close'>
					<span aria-hidden='true'>&times;</span>
				</button>
			</div>
			<div className='card shadow my-auto'>
				<div className='row'>
					<div className='col-md-6 p-5'>
						<img
							src='/Images/Login.png'
							className='img-fluid'
							alt=''
						/>
					</div>
					<div className='col-md-6 my-5 p-5'>
						<div className='form-group'>
							{error && (
								<div
									className='alert alert-danger'
									role='alert'>
									{error}

									<button
										type='button'
										className='close'
										data-dismiss='alert'
										aria-label='Close'>
										<span aria-hidden='true'>&times;</span>
									</button>
								</div>
							)}
						</div>
						<form autoComplete='off'>
							<div className='form-group'>
								<label htmlFor='Email'>
									Entet the UserName
								</label>
								<input
									type='text'
									name='userName'
									className='form-control'
									placeholder='Enter UserName'
									value={userName}
									onChange={(e) =>
										setUserName(e.target.value)
									}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='Password'>Password</label>
								<input
									type='password'
									name='password'
									className='form-control'
									placeholder='Password'
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
							<ReCAPTCHA
								sitekey='6Lf1NakaAAAAADPgl5QAb-VqZp250hAVM0vnw7ye'
								onChange={(token) => setToken(token)}
								onExpired={(e) => setToken('')}
							/>

							<button
								type='submit'
								onClick={handleSubmit}
								className='btn mt-4 btn-primary'>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
