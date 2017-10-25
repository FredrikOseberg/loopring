import React from 'react';
import PersonCard from '../PersonCard/PersonCard';
import SimplePersonCard from '../Contributors/SimplePersonCard/SimplePersonCard';
import primaryAdvisorData from '../../../primaryAdvisorData';
import secondaryAdvisorData from '../../../secondaryAdvisorData';
import './loopringadvisors.css';

const Advisors = props => {
	const primaryAdvisors = primaryAdvisorData.map(advisor => {
		return (
			<PersonCard
				name={advisor.name}
				img={advisor.img}
				position={advisor.position}
				experiences={advisor.experience}
				key={advisor.id}
			/>
		);
	});
	const secondaryAdvisors = secondaryAdvisorData.map(advisor => {
		return (
			<SimplePersonCard
				name={advisor.name}
				img={advisor.img}
				credentials={advisor.credentials}
				key={advisor.key}
			/>
		);
	});
	return (
		<div className="loopring--advisors">
			<h1>Primary Advisors</h1>
			<div className="loopring--advisors--container">{primaryAdvisors}</div>

			<div className="loopring--secondary--advisors--container">
				<h2>Secondary Advisors</h2>
				<div className="loopring--secondary--advisors--inner--container">{secondaryAdvisors}</div>
			</div>
		</div>
	);
};

export default Advisors;
