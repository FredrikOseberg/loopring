import React, { Component } from 'react';
import Header from '../Header/Header';
import faqData from '../../faqData';
import Question from './Question/Question';
import Footer from '../Footer/Footer';
import './loopringfaq.css';

class Faq extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		let questions = faqData.map((question, index) => {
			let open = false;
			if (index === 0) {
				open = true;
			}

			return <Question title={question.title} answer={question.answer} key={question.id} open={open} />;
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
	}
}

export default Faq;
