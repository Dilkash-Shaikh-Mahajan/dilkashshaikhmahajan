import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import Social from './Common/Social';
import { sendMail } from '../../api';

const Contact = () => {
	const history = useHistory();
	const [error, setError] = useState('');
	const [token, setToken] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [comment, setComment] = useState('');
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!token) {
			setError('Yoou must verify the captcha');
			return;
		}
		setError('');
		if (!name) {
			setError('Please Check The Name');
			return;
		}
		if (!email) {
			setError('Please Check The Email');
			return;
		}
		if (!subject) {
			setError('Please Check The Subject');
			return;
		}
		if (!comment) {
			setError('Please Check The Message');
			return;
		}

		let data = {
			name,
			email,
			subject,
			comment,
		};
		await sendMail(data);
		console.log(data);
		history.push('/home');
		setToken('');
	};
	return (
		<div>
			<section>
				<div className='container'>
					<div className='section-title text-center mt-3 text-lg-left mb-5'>
						<h2>Contact Me</h2> <br />
						<p className='text-muted'>
							I can help you with your project. Get in touch.
						</p>
					</div>
					<div className='row'>
						<div className='col-md-5'>
							<div className='text-left'>
								<div className='contacts'>
									<div className='about-contacts py-2'>
										<div className='row'>
											<div className='col-md-12'>
												<p>
													<i className='fas fa-map-marker-alt'></i>{' '}
													Location: Kanyadhol, Nagpur
												</p>
												<p>
													<i className='fas fa-phone-alt'></i>{' '}
													Phone:{' '}
													<a
														href='tel: 9325696751'
														className='text-muted'>
														9325696751
													</a>
												</p>
												<p>
													<i className='fas fa-calendar-alt'></i>{' '}
													Age: 21
												</p>
												<p>
													<i className='fas fa-envelope'></i>{' '}
													Mail:
													<a
														href='mailto:dilkashmahajan8@gmail.com '
														className='text-muted'>
														{' '}
														dilkashmahajan8@gmail.com
													</a>
												</p>
											</div>
										</div>
									</div>
								</div>
								<Social />
							</div>
						</div>
						<div className='col-md-7'>
							<div className='contact-form'>
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
												<span aria-hidden='true'>
													&times;
												</span>
											</button>
										</div>
									)}
								</div>
								<form method='post' autoComplete='off'>
									<div className='row'>
										<div className='col-md-6'>
											<div className='form-group mt-2'>
												<input
													type='text'
													className='form-control'
													name='name'
													required=''
													value={name}
													onChange={(e) =>
														setName(e.target.value)
													}
													placeholder='Enter Your Name*'
												/>
											</div>
										</div>
										<div className='col-md-6'>
											<div className='form-group mt-2'>
												<input
													type='email'
													className='form-control'
													name='email'
													required={true}
													value={email}
													onChange={(e) =>
														setEmail(e.target.value)
													}
													placeholder='Enter Your Email*'
												/>
											</div>
										</div>
										<div className='col-md-12'>
											<div className='form-group mt-2'>
												<input
													type='text'
													className='form-control'
													name='subject'
													value={subject}
													onChange={(e) =>
														setSubject(
															e.target.value,
														)
													}
													required=''
													placeholder='Your Subject...'
												/>
											</div>
										</div>
										<div className='col-md-12'>
											<div className='form-group mt-2'>
												<textarea
													name='comments'
													value={comment}
													onChange={(e) =>
														setComment(
															e.target.value,
														)
													}
													rows='4'
													className='form-control'
													placeholder='Enter Your Message...'></textarea>
											</div>
										</div>
									</div>
									<ReCAPTCHA
										sitekey='6Lf1NakaAAAAADPgl5QAb-VqZp250hAVM0vnw7ye'
										onChange={(token) => setToken(token)}
										onExpired={(e) => setToken('')}
									/>

									<div className='form-submit'>
										<button
											className='btn-submit shadow mt-4'
											onClick={handleSubmit}
											type='submit'
											name='submit'>
											Send Message{' '}
											<i className='fas fa-long-arrow-alt-right'></i>
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
