import React, { Component } from 'react';
import HeaderIcon from '../../Misc/HeaderIcon/HeaderIcon';
import './loopringcover.css';

class Cover extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		};

		this.handleWhitepaperClick = this.handleWhitepaperClick.bind(this);
		this.handleLearnMoreClick = this.handleLearnMoreClick.bind(this);
	}

	handleWhitepaperClick() {
		this.setState({ clicked: !this.state.clicked });
	}

	handleLearnMoreClick() {
		const el = document.querySelector('#hiw');
		el.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	render() {
		let dropdownClasses;
		if (this.state.clicked) {
			dropdownClasses = 'loopring--landing--information--dropdown visible opacity transition';
		} else {
			dropdownClasses = 'loopring--landing--information--dropdown';
		}

		return (
			<div className="loopring--landing--cover">
				<div className="loopring--landing--information--container">
					<div className="loopring--landing--information--inner--container">
						<div className="loopring--landing--information--text">
							<div className="loopring--landing--information--text--container">
								<h1>Loopring</h1>
								<p>Disruptive protocol to decentralize cryptocurrency exchanges.</p>
								<div
									className="loopring--landing--information--whitepaper"
									onClick={this.handleWhitepaperClick}
								>
									<p>Read whitepaper</p>
									<div className="loopring--landing--dropdown--pill">
										<i className="material-icons">keyboard_arrow_down</i>
									</div>
									<div className={dropdownClasses}>
										<ul>
											<li>
												Whitepaper (Chinese)<i className="material-icons">get_app</i>
											</li>
											<li>
												Whitepaper<i className="material-icons">get_app</i>
											</li>
											<li>
												Introduction (Chinese)<i className="material-icons">get_app</i>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="loopring--landing--information--box--container">
							<div className="loopring--landing--information--box">
								<HeaderIcon icon="flash_on" />
								<h2>Quick Info</h2>
								<ul className="loopring--landing--information--box--list">
									<li>
										<i className="material-icons loopring--landing--information--box--list--icon">
											priority_high
										</i>Reduces exchange risk
									</li>
									<li>
										<i className="material-icons loopring--landing--information--box--list--icon">
											group
										</i>Decentralized
									</li>
									<li>
										<i className="material-icons loopring--landing--information--box--list--icon">
											share
										</i>Order Sharing
									</li>
								</ul>

								<button
									className="loopring--landing--information--box--button"
									onClick={this.handleLearnMoreClick}
								>
									Learn More
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Cover;
