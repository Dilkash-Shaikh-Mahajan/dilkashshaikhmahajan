import React from 'react';

const Experience = () => {
	return (
		<div>
			{/* <!-- ======= Portfolio Section ======= --> */}
			<section id='portfolio' className='py-70 portfolio'>
				<div className='container'>
					<div className='section-title text-center mt-3 text-lg-left mb-2'>
						<h2>Experience.</h2> <br />
						<p className='text-muted'>
							Here is my Education and Experience.
						</p>
					</div>

					<div className='row'>
						<div className='col-lg-6'>
							<h3 className='mb-3 portfolio-title'>
								Professional Experience
							</h3>
							<div className='portfolio-item'>
								<h4>Web Developer</h4>
								<h5>Oct/2020 - Nov/2020</h5>
								<p>
									<em>Internship Studio </em>
								</p>

								<ul>
									<li>
										In this internship, I had did a
										E-Commerce Website Clone.
									</li>
								</ul>
							</div>
							<div className='portfolio-item'>
								<h4>Web Developer</h4>
								<h5>May / 2020 </h5>
								<p>
									<em>ICEICO Technology, Nagpur</em>
								</p>

								<ul>
									<li>
										I have done R & D in Bootstrap, HTML,
										CSS, PHP, and MySQL.
									</li>
									<li>
										I was given tasks related to HTML and
										Bootstrap by ma'am and I have submitted
										them within the time.
									</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-6'>
							<h3 className='portfolio-title mb-3'>Education</h3>
							<div className='portfolio-item'>
								<h4>Computer Science & Engineering | B.E</h4>

								<h5>Aug/2019 - May/2022</h5>

								<p>
									<em>
										Anjuman College Of Engineering and
										Technology, Nagpur
									</em>
								</p>
								{/* <p>
									Completed PG diploma with Grade A (71.75 %)
								</p> */}
							</div>
							<div className='portfolio-item'>
								<h4>
									Computer Science & Engineering | Diploma{' '}
								</h4>
								<h5>Aug/2016 – May/2019</h5>
								<p>
									<em>
										Nagpur Institute of Technology, Nagpur
									</em>
								</p>
								<p>Completed Diploma in First class (73%)</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Portfolio Section --> */}
		</div>
	);
};

export default Experience;
