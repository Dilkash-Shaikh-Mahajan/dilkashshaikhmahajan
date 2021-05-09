import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className='container-fluid nav_bg'>
				<div className='row'>
					<div className='col-10 mx-auto'>
						<nav className='navbar navbar-expand-lg navbar-dark '>
							<div className='container-fluid'>
								<NavLink
									className='navbar-brand font-weight-bold'
									to='/'>
									<span className='text-success'>
										Dilkash
									</span>{' '}
									Shaikh Mahajan
								</NavLink>
								<button
									className='navbar-toggler'
									type='button'
									data-toggle='collapse'
									data-target='#navbarSupportedContent'
									aria-controls='navbarSupportedContent'
									aria-expanded='false'
									aria-label='Toggle navigation'>
									<span className='navbar-toggler-icon'></span>
								</button>
								<div
									className='collapse navbar-collapse'
									id='navbarSupportedContent'>
									<ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												exact
												className='nav-link text-white '
												aria-current='page'
												to='/'>
												Home
											</NavLink>
										</li>

										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												className='nav-link text-white'
												to='/about'>
												About
											</NavLink>
										</li>

										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												className='nav-link text-white'
												to='/experience'>
												Experience
											</NavLink>
										</li>
										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												className='nav-link text-white'
												to='/portfolio'>
												Portfolio
											</NavLink>
										</li>
										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												className='nav-link text-white'
												to='/certification'>
												Achievements
											</NavLink>
										</li>
										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												className='nav-link text-white'
												to='/contact'>
												Contact
											</NavLink>
										</li>
										<li className='nav-item'>
											<NavLink
												activeClassName='menu_active'
												exact
												className='nav-link text-white '
												aria-current='page'
												to='/login'>
												Login
											</NavLink>
										</li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
