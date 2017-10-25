import React from 'react';
import Header from '../Header/Header';
import PrimaryTeam from './PrimaryTeam/PrimaryTeam';
import Contributors from './Contributors/Contributors';
import './loopringteam.css';

const Team = () => (
	<div className="loopring--team">
		<Header />
		<PrimaryTeam />
		<Contributors />
	</div>
);

export default Team;
