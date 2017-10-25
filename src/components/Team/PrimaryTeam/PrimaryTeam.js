import React from 'react';
import HeaderIcon from '../../Misc/HeaderIcon/HeaderIcon';
import teamData from '../../../teamData';
import PersonCard from '../PersonCard/PersonCard';
import './loopringprimaryteam.css';

const PrimaryTeam = () => {
	let team = teamData.map(teamMember => {
		return (
			<PersonCard
				img={teamMember.img}
				name={teamMember.name}
				email={teamMember.email}
				position={teamMember.position}
				experiences={teamMember.experience}
			/>
		);
	});
	return (
		<div className="loopring--team--container">
			<div className="loopring--primary--team">
				<div className="loopring--primary--team--header">
					<HeaderIcon icon="people" />
					<h1>Team</h1>
				</div>
				<div className="loopring--primary--team--container">{team}</div>
			</div>
		</div>
	);
};

export default PrimaryTeam;
