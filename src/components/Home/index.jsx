import './index.scss';
import React from 'react';
import NavBar from './NavBar';
import Landing from './Landing';

const Home = () => {
	return (
		<>
			<NavBar />
			<Landing />
			make sure to import the style.css after the bootstrap file
		</>
	);
};

export default Home;
