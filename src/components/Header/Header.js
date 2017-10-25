import React, { Component } from 'react';
import loopringLogo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrolling: false
		};

		this.handleScrolling = this.handleScroll.bind(this);
	}

	handleScroll() {
		if (window.scrollY !== 0) {
			this.setState({ scrolling: true });
		} else {
			this.setState({ scrolling: false });
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScrolling);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScrolling);
	}

	render() {
		let headerClasses;

		if (this.state.scrolling || !this.props.landing) {
			headerClasses = 'loopring--header loopring--header--scrolling';
		} else {
			headerClasses = 'loopring--header';
		}

		return (
			<div className={headerClasses}>
				<div className="loopring--header--container">
					<Link to="/">
						<img src={loopringLogo} alt="Loopring" />
					</Link>
					<div className="loopring--header--navigation">
						<ul className="loopring--header--navigation--list">
							<Link to="/team">
								<li>Team</li>
							</Link>
							<li>FAQ</li>
							<li>Roadmap</li>
							<li className="loopring--header--navigation--button">Wallet</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
