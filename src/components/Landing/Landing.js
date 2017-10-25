import React from 'react';
import './landing.css';
import Header from '../Header/Header';
import Features from '../Features/Features';
import Cover from './Cover/Cover';
import HowItWorks from './HowItWorks/HowItWorks';
import Backers from './Backers/Backers';
import Footer from '../Footer/Footer';

const Landing = () => (
	<div className="loopring--landing">
		<Header landing={true} />
		<Cover />
		<HowItWorks />
		<Features />
		<Backers />
		<Footer />
	</div>
);

export default Landing;
