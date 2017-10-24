import React from 'react';
import LoopringFeatureBox from './LoopringFeatureBox/LoopringFeatureBox';
import './loopringfeatures.css';
import featureData from '../../featureBoxData';

const Features = () => {
	const featureBoxes = featureData.map(feature => {
		return (
			<LoopringFeatureBox title={feature.name} text={feature.text} icon={feature.icon} color={feature.color} />
		);
	});

	return (
		<div className="loopring--features">
			<div className="loopring--container">
				<div className="loopring--features--description">
					<div className="loopring--features--description--icon">
						<i className="material-icons" aria-hidden="true">
							star
						</i>
					</div>
					<h1>Loopring Features</h1>
				</div>
				<div className="loopring--features--boxes">{featureBoxes}</div>
			</div>
		</div>
	);
};

export default Features;
