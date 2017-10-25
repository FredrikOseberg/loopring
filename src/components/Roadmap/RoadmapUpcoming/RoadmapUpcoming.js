import React from 'react';
import milestoneData from '../../../milestoneData';
import RoadmapCard from '../RoadmapCard/RoadmapCard';
import './loopringroadmapupcoming.css';

const RoadmapUpcoming = () => {
	let upcomingMilestones = milestoneData
		.filter(milestone => {
			return milestone.completed !== true;
		})
		.map(milestone => {
			return (
				<RoadmapCard
					icon={milestone.icon}
					name={milestone.name}
					date={milestone.date}
					completed={milestone.completed}
					key={milestone.id}
				/>
			);
		});

	return (
		<div className="loopring--roadmap--upcoming">
			<div className="loopring--roadmap--upcoming--container">
				<h1>Upcoming Milestones</h1>
				<div className="loopring--roadmap--upcoming--inner--container">{upcomingMilestones}</div>
			</div>
		</div>
	);
};

export default RoadmapUpcoming;
