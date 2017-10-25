import React from 'react';
import contributorData from '../../../contributorData';
import SimplePersonCard from './SimplePersonCard/SimplePersonCard';
import './loopringcontributors.css';

const Contributors = props => {
	let contributors = contributorData.map(contributor => {
		return (
			<SimplePersonCard
				img={contributor.img}
				name={contributor.name}
				credentials={contributor.credentials}
				key={contributor.id}
			/>
		);
	});
	return (
		<div className="loopring--team--contributors">
			<h1>Contributors</h1>
			<div className="loopring--team--contributors--container">{contributors}</div>
		</div>
	);
};

export default Contributors;
