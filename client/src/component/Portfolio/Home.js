import React from 'react';
import Typical from 'react-typical';
const Home = () => {
	return (
		<div>
			<section
				style={{ backgroundImage: 'url(/Images/bgi.jpg)' }}
				className='home-area'>
				<div className='container '>
					<div className='home-content mt-24 flex-column d-flex justify-content-center'>
						<div>
							<h6 className='hello text-white'>
								Hello <span>Everyone!</span>
							</h6>
						</div>
						<div className='intro text-white'>
							<h1>I'm Dilkash Shaikh Mahajan</h1>
						</div>
						<div className='intro-skill mb-1'>
							<h5 className='text-white'>
								A{' '}
								<Typical
									steps={[
										'FrontEnd Developer 💻',
										1000,
										'FullStack Developer 🌏',
										2000,
									]}
									loop={Infinity}
									wrapper='b'
								/>
							</h5>
						</div>
						<div className='desc mt-3'>
							<p className='text-white'>
								I'm 21 years old A MERN 💻 Stack Developer and Cricker Lover🏏
							</p>
						</div>

						<div className='hire mt-3'>
							<a
								href='https://swarajyaus.herokuapp.com/Pk8kSV5b_'
								target="_blank"

								className='btn-hire mr-5'>
								Hire Me{' '}
								<i className='fas fa-long-arrow-alt-right'></i>
							</a>
							<a
								href='https://api.whatsapp.com/send?phone=919325696751&text=Hello%2C%20Dilkash.'
								className='btn-hire'>
								Say Hi!!{' '}
								<i className='fas fa-long-arrow-alt-right'></i>
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
