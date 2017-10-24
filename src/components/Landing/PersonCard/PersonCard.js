import React from 'react';
import OrderDetails from './OrderDetails/OrderDetails';
import './personcard.css';

const PersonCard = props => (
	<div className="person--card">
		<div className="person--card--header">
			<img src={props.img} alt={props.name} />
			<h2>{props.name}</h2>
		</div>
		<OrderDetails name={'Bitcoin'} />
		<div className="person--card--wallet">hello</div>
	</div>
);

export default PersonCard;
