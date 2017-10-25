import React from 'react';
import milestoneData from '../../../milestoneData';
import RoadmapCard from '../RoadmapCard/RoadmapCard';
import './loopringroadmapcompleted.css';

const RoadmapCompleted = () => {
	let completedMilestones = milestoneData
		.filter(milestone => {
			return milestone.completed === true;
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
		<div className="loopring--roadmap--completed">
			<div className="loopring--roadmap--completed--container">
				<h1>Completed Milestones</h1>
				<div className="loopring--roadmap--completed--inner--container">{completedMilestones}</div>
			</div>
		</div>
	);
};

export default RoadmapCompleted;
