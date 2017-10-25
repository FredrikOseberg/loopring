import React from 'react';
import Header from '../Header/Header';
import RoadmapUpcoming from './RoadmapUpcoming/RoadmapUpcoming';
import RoadmapCompleted from './RoadmapCompleted/RoadmapCompleted';
import './loopringroadmap.css';

const Roadmap = () => (
	<div className="loopring--roadmap">
		<Header />
		<RoadmapUpcoming />
		<RoadmapCompleted />
	</div>
);

export default Roadmap;
