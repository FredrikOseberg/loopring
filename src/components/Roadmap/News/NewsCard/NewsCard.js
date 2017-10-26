import React from 'react';
import './loopringnewscard.css';

const NewsCard = props => (
	<div className="loopring--news--card">
		<div className="loopring--news--card--container">
			<img src={props.img} alt="News image" />
			<div className="loopring--news--card--border" />
			<div className="loopring--news--card--information">
				<h2>{props.name}</h2>
			</div>
			<p>{props.date}</p>
		</div>
	</div>
);

export default NewsCard;
