import React, { Component } from 'react';
import './loopringpersoncard.css';

class PersonCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: false
		};

		this.handleExpand = this.handleExpand.bind(this);
	}

	handleExpand() {
		this.setState({ expanded: !this.state.expanded });
	}

	render() {
		let expandButton,
			cap = 3;
		if (!this.state.expanded && this.props.experiences.length > 3) {
			expandButton = (
				<div className="person--card--work--experience--expand" onClick={this.handleExpand}>
					<i className="material-icons">add</i>
				</div>
			);
			cap = 3;
		} else if (this.state.expanded && this.props.experiences.length > 3) {
			expandButton = (
				<div className="person--card--work--experience--expand" onClick={this.handleExpand}>
					<i className="material-icons">remove</i>
				</div>
			);
			cap = this.props.experiences.length - 1;
		}

		return (
			<div className="person--card">
				<div className="person--card--container">
					<div className="person--card--header">
						<img src={this.props.img} alt={this.props.name} />
						<h2>{this.props.name}</h2>
						<p className="person--card--header--email">{this.props.email}</p>

						<div className="person--card--header--information">
							<div className="person--card--header--information--position">{this.props.position}</div>
						</div>
					</div>
				</div>
				<div className="person--card--work--experience">
					<div className="person--card--work--experience--container">
						<div className="person--card--work--experience--header">
							<i className="material-icons">work</i>
							<h4>Work Experience</h4>
						</div>
						<ul className="person--card--work--experience--list">
							{this.props.experiences.map((experience, index) => {
								if (index < cap) {
									return <li key={experience.id}>{experience.job}</li>;
								} else {
									return '';
								}
							})}
						</ul>
						{expandButton}
					</div>
				</div>
			</div>
		);
	}
}

export default PersonCard;
