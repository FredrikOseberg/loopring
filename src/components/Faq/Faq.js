import React from 'react';
import Header from '../Header/Header';
import faqData from '../../faqData';
import Question from './Question/Question';
import Footer from '../Footer/Footer';
import './loopringfaq.css';

const Faq = () => {
	let questions = faqData.map(question => {
		return <Question title={question.title} answer={question.answer} key={question.id} />;
	});
	return (
		<div className="loopring--faq">
			<Header />
			<div className="loopring--faq--container">
				<h1>Got questions?</h1>
				<div className="loopring--faq--inner--container">{questions}</div>
			</div>
			<Footer />
		</div>
	);
};

export default Faq;
