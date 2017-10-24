import React from 'react';
import './landing.css';
import Header from '../Header/Header';
import Features from '../Features/Features';

const Landing = () => (
	<div className="loopring--landing">
		<div className="loopring--landing--cover">
			<Header />
		</div>
		<Features />
	</div>
);

export default Landing;
