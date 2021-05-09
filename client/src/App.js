import React from 'react';
import './App.css';
import Home from './component/Portfolio/Home';
import Navbar from './component/Navbar';
import About from './component/Portfolio/About';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Portfolio/Contact';
import Experience from './component/Portfolio/Experience';
import Certification from './component/Portfolio/Certification';
import Login from './component/Login';

import UploadProject from './component/UploadProject';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route exact path='/experience' component={Experience} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/certification' component={Certification} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/uploadproject' component={UploadProject} />

				<Redirect to='/' />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
