import React from 'react';
import newsData from '../../../newsData';
import NewsCard from './NewsCard/NewsCard';
import './loopringnews.css';

const News = () => {
	let newscards = newsData
		.map(news => {
			return <NewsCard name={news.title} img={news.img} key={news.id} date={news.date} />;
		})
		.reverse();
	return (
		<div className="loopring--news">
			<div className="loopring--news--container">
				<h1>Loopring News</h1>
				<div className="loopring--news--inner--container">{newscards}</div>
			</div>
		</div>
	);
};

export default News;
