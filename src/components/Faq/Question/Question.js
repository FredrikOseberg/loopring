import React, { Component } from 'react';
import './loopringquestion.css';

class Question extends Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ expanded: !this.state.expanded });
	}

	render() {
		let icon, answerClasses;
		if (this.state.expanded) {
			icon = 'remove';
			answerClasses = 'loopring--faq--answer visible static';
		} else {
			icon = 'add';
			answerClasses = 'loopring--faq--answer';
		}

		return (
			<div className="loopring--faq--question" onClick={this.handleClick}>
				<div className="loopring--faq--question--header">
					<div className="loopring--faq--question--icon">
						<i className="material-icons">{icon}</i>
					</div>
					<h2>{this.props.title}</h2>
				</div>
				<div className={answerClasses}>
					<p>{this.props.answer}</p>
				</div>
			</div>
		);
	}
}

export default Question;
