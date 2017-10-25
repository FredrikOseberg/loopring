import React from 'react';
import Header from '../Header/Header';
import PrimaryTeam from './PrimaryTeam/PrimaryTeam';
import Contributors from './Contributors/Contributors';
import Advisors from './Advisors/Advisors';
import './loopringteam.css';

const Team = () => (
	<div className="loopring--team">
		<Header />
		<PrimaryTeam />
		<Contributors />
		<Advisors />
	</div>
);

export default Team;
