import React from 'react';
import PersonCard from '../../Landing/PersonCard/PersonCard';
import person from '../../../img/person.jpeg';
import './howitworks.css';

const HowItWorks = () => (
	<div className="landing--hiw">
		<div className="landing--hiw--container">
			<div className="landing--hiw--header">
				<div className="loopring--features--description--icon">
					<i className="material-icons hiw--icon" aria-hidden="true">
						settings
					</i>
				</div>
				<h1>How It Works</h1>
				<div className="landing--hiw--inner--container">
					<PersonCard img={person} name={'David Kramer'} />
				</div>
			</div>
		</div>
	</div>
);

export default HowItWorks;
