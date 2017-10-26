import React from 'react';
import contributorData from '../../../contributorData';
import PersonListItem from '../PersonListItem/PersonListItem';
import SimplePersonCard from './SimplePersonCard/SimplePersonCard';
import './loopringcontributors.css';

const Contributors = props => {
	let contributors = contributorData.map(contributor => {
		return (
			<PersonListItem
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
			<div className="loopring--team--contributors--container">
				<ul className="loopring--team--contributors--list">{contributors}</ul>
			</div>
		</div>
	);
};

export default Contributors;
