import React, { Component } from 'react';
import loopringLogo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrolling: false,
			mobileNavOpen: false,
			width: window.innerWidth
		};

		this.handleScrolling = this.handleScroll.bind(this);
		this.handleOpenNav = this.handleOpenNav.bind(this);
		this.handleCloseNav = this.handleCloseNav.bind(this);
		this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
	}

	handleScroll() {
		if (window.scrollY !== 0) {
			this.setState({ scrolling: true });
		} else {
			this.setState({ scrolling: false });
		}
	}

	handleWindowSizeChange() {
		this.setState({ width: window.innerWidth });
	}

	handleOpenNav() {
		this.setState({ mobileNavOpen: true });
	}

	handleCloseNav() {
		this.setState({ mobileNavOpen: false });
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScrolling);
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScrolling);
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	render() {
		let headerClasses, navigation;

		if (this.state.scrolling || !this.props.landing) {
			headerClasses = 'loopring--header loopring--header--scrolling';
		} else {
			headerClasses = 'loopring--header';
		}

		if (this.state.width >= 600) {
			navigation = (
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
								<Link to="/faq">
									<li>FAQ</li>
								</Link>
								<Link to="/roadmap">
									<li>Roadmap</li>
								</Link>
								<li className="loopring--header--navigation--button">Wallet</li>
							</ul>
						</div>
					</div>
				</div>
			);
		} else {
			let navClasses;
			if (this.state.mobileNavOpen) {
				navClasses = 'loopring--mobile--sidebar loopring--mobile--sidebar--active transition--width';
			} else {
				navClasses = 'loopring--mobile--sidebar';
			}

			navigation = (
				<div className={headerClasses}>
					<div className="loopring--header--mobile">
						<div className="loopring--header--mobile--nav--open" onClick={this.handleOpenNav}>
							<i className="material-icons">menu</i>
						</div>
					</div>
					<div className={navClasses}>
						<div className="loopring--mobile--sidebar--exit" onClick={this.handleCloseNav}>
							&times;
						</div>
						<ul className="loopring--mobile--sidebar--nav">
							<Link to="/">
								<li>Home</li>
							</Link>
							<Link to="/team">
								<li>Team</li>
							</Link>
							<Link to="/faq">
								<li>FAQ</li>
							</Link>
							<Link to="/roadmap">
								<li>Roadmap</li>
							</Link>
							<li>Wallet</li>
						</ul>
						<div className="loopring--mobile--logo">
							<img src={loopringLogo} alt="Loopring" />
						</div>
					</div>
				</div>
			);
		}

		return <div>{navigation}</div>;
	}
}

export default Header;
