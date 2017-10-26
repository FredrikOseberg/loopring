import React, { Component } from 'react';
import './personlistitem.css';

class PersonListItem extends Component {
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
		let credentialsClasses;
		if (this.state.expanded) {
			credentialsClasses = 'person--list--item--credentials visible opacity static transition';
		} else {
			credentialsClasses = 'person--list--item--credentials';
		}

		return (
			<li className="person--list--item" onClick={this.handleClick}>
				<div className="person--list--item--container">
					<img src={this.props.img} alt={this.props.name} />
					<p>{this.props.name}</p>
					<i className="material-icons">keyboard_arrow_down</i>
				</div>
				<div className={credentialsClasses}>
					<div className="person--list--item--credentials--header">
						<i className="material-icons">work</i>
						<h4>Work Experience</h4>
					</div>
					<ul>
						{this.props.credentials.map(credential => {
							return <li key={credential.id}>{credential.job}</li>;
						})}
					</ul>
				</div>
			</li>
		);
	}
}

export default PersonListItem;
