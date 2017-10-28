import React, { Component } from 'react';
import Header from '../Header/Header';
import PrimaryTeam from './PrimaryTeam/PrimaryTeam';
import Contributors from './Contributors/Contributors';
import Advisors from './Advisors/Advisors';
import Footer from '../Footer/Footer';
import './loopringteam.css';

class Team extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="loopring--team">
				<Header />
				<PrimaryTeam />
				<Contributors />
				<Advisors />
				<Footer />
			</div>
		);
	}
}

export default Team;
