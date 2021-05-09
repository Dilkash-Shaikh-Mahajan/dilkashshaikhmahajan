import React from 'react';

const Certification = () => {
	return (
		<>
			<section className='py-70 portfolio'>
				<div className='container'>
					<div className='section-title font-low text-center text-lg-left mb-3'>
						<h2>Certifications</h2> <br />
						<p className='text-muted'>Here is my Achievements.</p>
					</div>

					<div className='row'>
						<div className='col-lg-6'>
							<h3 className='portfolio-title mb-3'>
								Certifications
							</h3>
							<div className='portfolio-item'>
								<h4>
									{' '}
									NodeJs: Build The Complete E-Commerce Web
									API
								</h4>
								<h5>08/2018 - Present</h5>
								<p>Udemy</p>
							</div>
							<div className='portfolio-item'>
								<h4>
									React - The Complete Guide with React Hook
									Redux
								</h4>
								<h5>08/2018 - Present</h5>
								<p>Udemy</p>
							</div>
							<div className='portfolio-item'>
								<h4>Media Queries</h4>
								<h5>08/2018</h5>
								<p>Eduonix</p>
							</div>
							<div className='portfolio-item'>
								<h4> Bootstrap 4 Responsive Web Development</h4>
								<h5>06/2020</h5>
								<p>Udemy</p>
							</div>
							{/* <div className='portfolio-item'>
								<h4>
									MongoDB Essentials - Understand the Basics
									of MongoDB
								</h4>
								<h5></h5>
							</div> */}
						</div>
						<div className='col-lg-6'>
							<h3 className='portfolio-title mb-3'>Trainings</h3>
							<div className='portfolio-item'>
								<h4>MERN Stack Developemnet</h4>

								<h5>Feb-2021 - Present</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Certification;
