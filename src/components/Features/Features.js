import React from 'react';
import LoopringFeatureBox from './LoopringFeatureBox/LoopringFeatureBox';
import HeaderIcon from '../Misc/HeaderIcon/HeaderIcon';
import './loopringfeatures.css';
import featureData from '../../featureBoxData';

const Features = () => {
	const featureBoxes = featureData.map(feature => {
		return (
			<LoopringFeatureBox
				title={feature.name}
				text={feature.text}
				icon={feature.icon}
				color={feature.color}
				key={feature.icon}
				excerpt={feature.excerpt}
			/>
		);
	});

	return (
		<div className="loopring--features">
			<div className="loopring--container">
				<div className="loopring--features--description">
					<HeaderIcon icon={'star'} />
					<h1>Loopring Features</h1>
				</div>
				<div className="loopring--features--boxes">{featureBoxes}</div>
			</div>
		</div>
	);
};

export default Features;
