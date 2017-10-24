import React from 'react';
import './landing.css';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Cover from './Cover/Cover';
import HowItWorks from './HowItWorks/HowItWorks';

const Landing = () => (
	<div className="loopring--landing">
		<Header />
		<Cover />
		<HowItWorks />
		<Features />
	</div>
);

export default Landing;
