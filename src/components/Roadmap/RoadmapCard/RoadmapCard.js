import React from 'react';
import './loopringroadmapcard.css';

const RoadmapCard = props => {
	let statusClasses;
	if (props.completed) {
		statusClasses = 'loopring--roadmap--status';
	} else {
		statusClasses = 'loopring--roadmap--status loopring--roadmap--status--not--complete';
	}
	return (
		<div className="loopring--roadmap--card">
			<div className="loopring--roadmap--card--container">
				<div className="loopring--roadmap--card--header">
					<i className="material-icons">{props.icon}</i>
				</div>
				<div className="loopring--roadmap--card--border" />
				<div className="loopring--roadmap--card--information">
					<h2>{props.name}</h2>
					<p>{props.date}</p>
				</div>
			</div>
			<div className={statusClasses}>
				<div className="loopring--roadmap--status--container">
					<div className="loopring--roadmap--status--header">
						<i className="material-icons">settings</i>
						<h3>Status</h3>
					</div>
					<div className="loopring--roadmap--status--information">
						<p>{props.completed ? 'Completed' : `Due to complete ${props.date}`}</p>
						<div className="loopring--roadmap--status--information--icon">
							<i className="material-icons">{props.completed ? 'check' : 'autorenew'}</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoadmapCard;
