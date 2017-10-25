import React from 'react';
import './loopringsimplepersoncard.css';

const SimplePersonCard = props => (
	<div className="simple--person--card">
		<div className="simple--person--card--container">
			<div className="simple--person--card--header">
				<img src={props.img} alt={props.name} />
				<h2>{props.name}</h2>
			</div>
			<div className="simple--person--card--work--experience">
				<div className="simple--person--card--work--experience--header">
					<i className="material-icons">work</i>
					<h4>Work Experience</h4>
				</div>
				<ul className="simple--person--card--work--experience--list">
					{props.credentials.map(credential => {
						return <li key={credential.id}>{credential.job}</li>;
					})}
				</ul>
			</div>
		</div>
	</div>
);

export default SimplePersonCard;
