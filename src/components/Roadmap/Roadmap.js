import React from 'react';
import Header from '../Header/Header';
import RoadmapUpcoming from './RoadmapUpcoming/RoadmapUpcoming';
import RoadmapCompleted from './RoadmapCompleted/RoadmapCompleted';
import News from './News/News.js';
import Footer from '../Footer/Footer';
import './loopringroadmap.css';

const Roadmap = () => (
	<div className="loopring--roadmap">
		<Header landing={true} />
		<News />
		<RoadmapUpcoming />
		<RoadmapCompleted />
		<Footer />
	</div>
);

export default Roadmap;
