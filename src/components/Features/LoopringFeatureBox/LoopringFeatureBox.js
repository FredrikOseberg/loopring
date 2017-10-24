import React, { Component } from 'react';
import './loopringfeaturebox.css';

class LoopringFeatureBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ clicked: !this.state.clicked });
	}

	render() {
		let infoText, icon;
		if (this.state.clicked) {
			infoText = this.props.text;
			icon = 'remove';
		} else {
			infoText = this.props.excerpt;
			icon = 'add';
		}
		return (
			<div
				className={`loopring--featurebox loopring--featurebox--${this.props.color}`}
				onClick={this.handleClick}
			>
				<i className="material-icons">{this.props.icon}</i>
				<h1 className="loopring--featurebox--title">{this.props.title}</h1>
				<p>{infoText}</p>
				<div className="loopring--featurebox--expand">
					<i className="material-icons">{icon}</i>
				</div>
			</div>
		);
	}
}

export default LoopringFeatureBox;
