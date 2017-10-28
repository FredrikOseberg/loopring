import React, { Component } from 'react';
import Header from '../Header/Header';
import RoadmapUpcoming from './RoadmapUpcoming/RoadmapUpcoming';
import RoadmapCompleted from './RoadmapCompleted/RoadmapCompleted';
import News from './News/News.js';
import Footer from '../Footer/Footer';
import './loopringroadmap.css';

class Roadmap extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="loopring--roadmap">
				<Header landing={true} />
				<News />
				<RoadmapUpcoming />
				<RoadmapCompleted />
				<Footer />
			</div>
		);
	}
}

export default Roadmap;
