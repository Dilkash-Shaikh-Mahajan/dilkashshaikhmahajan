import React from 'react';
import Social from './Common/Social';
import ProgressLine from './Common/ProgressLine';
import Ads from "../Ads"
const About = () => {
	return (
		<>
			<section>
				<div className='container'>
					<div className='section-title mt-3 text-center text-lg-left mb-md-2'>
						<h2>About Me</h2> <br />
						<p className='text-muted'>
							All you need to know about me
						</p>
					</div>
					<div className='row'>
						<div
							className='col-md-6 text-justify'
							style={{ fontFamily: 'Muli' }}>
							I love applying responsive design principles and
							watching my web pages shrink into mobile screens and
							still look amazing. I think in a way I'm kind of
							like those web pages, I still keep my creative flair
							intact. My specialties include quickly learning new
							skills and programming languages, problem-solving,
							responsive design principles, and website
							optimization. So far I have JavaScript, HTML, CSS,
							jQuery, Bootstrap, and Git/GitHub under my belt.
							I've started learning ReactJS, NodeJS, ExpressJS,
							and MongoDB. I'm still enthusiastically grabbing
							onto any other programming languages, frameworks, or
							principles I can integrate into the coding web into
							my head.
							<div className='about-contacts py-2'>
								<div className='row'>
									<div className='col-md-6'>
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
									</div>
									<div className='col-md-6'>
										<p>
											<i className='fas fa-calendar-alt'></i>{' '}
											Age: 21
										</p>
										<p>
											<i className='fas fa-envelope'></i>{' '}
											Mail:
											<a
												href='mailto:dilkashmahajan8@gmail.com '
												className='text-muted'
												style={{ fontSize: '13px' }}>
												{' '}
												dilkashmahajan8@gmail.com
											</a>
										</p>
									</div>
								</div>
							</div>
							<Social />
						</div>
						<div className='col-md-2'></div>
						<div className='col-md-4'>
							<div className='about-image my-2 mb-5 img-fluid text-center'>
								<div className='box-overlay'></div>
								<img
									src='/Images/Portfolio.jpg'
									alt='Dilkash Shaikh Mahajan'
									className='img-fluid mb-3'
								/>
							</div>
						</div>
					</div>
					<Ads/>
				</div>
			</section>

			<section id='skills' className='py-70 '>
				<div className='container'>
					<div className='section-title text-center text-lg-left mb-5'>
						<h2>Skills</h2> <br />
						<p className='text-muted'>Here is my skills.</p>
					</div>
					<div className='row'>
						<div className='col-lg-6'>
							<p className='skills'>
								<span className='skill'>
									<b>HTML</b> <i className='val'>90%</i>
								</span>
							</p>
							<ProgressLine
								visualParts={[
									{
										percentage: '90%',
										color: 'tan',
									},
								]}
							/>

							<p className='skills'>
								<span className='skill'>
									<b>JavaScript</b> <i className='val'>70%</i>
								</span>
							</p>
							<ProgressLine
								visualParts={[
									{
										percentage: '70%',
										color: 'tan',
									},
								]}
							/>
							<p className='skills'>
								<span className='skill'>
									<b>React JS</b> <i className='val'>70%</i>
								</span>
							</p>
							<ProgressLine
								visualParts={[
									{
										percentage: '70%',
										color: 'tan',
									},
								]}
							/>
							<p className='skills'>
								<span className='skill'>
									<b>MongoDB</b> <i className='val'>65%</i>
								</span>
							</p>
							<ProgressLine
								visualParts={[
									{
										percentage: '65%',
										color: 'tan',
									},
								]}
							/>
						</div>

						<div className='col-lg-6'>
							<p className='skills'>
								<span className='skill'>
									<b>CSS</b> <i className='val'>80%</i>
								</span>
							</p>
							<ProgressLine
								visualParts={[
									{
										percentage: '80%',
										color: 'tan',
									},
								]}
							/>
							<p className='skills'>
								<span className='skill'>
									<b>BootStrap</b> <i className='val'>90%</i>
								</span>
							</p>
							<ProgressLine
								visualParts={[
									{
										percentage: '90%',
										color: 'tan',
									},
								]}
							/>
							<p className='skills'>
								<span className='skill'>
									<b>Node JS</b> <i className='val'>60%</i>
								</span>
							</p>
							<ProgressLine
								visualParts={[
									{
										percentage: '60%',
										color: 'tan',
									},
								]}
							/>
							<p className='skills'>
								<span className='skill'>
									<b>Express JS</b> <i className='val'>70%</i>
								</span>
							</p>
							<ProgressLine
								visualParts={[
									{
										percentage: '70%',
										color: 'tan',
									},
								]}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
