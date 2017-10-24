import React from 'react';
import './loopringfeaturebox.css';

const LoopringFeatureBox = props => (
	<div className={`loopring--featurebox loopring--featurebox--${props.color}`}>
		<i className="material-icons">{props.icon}</i>
		<h1 className="loopring--featurebox--title">{props.title}</h1>
		<p>{props.text}</p>
	</div>
);

export default LoopringFeatureBox;
