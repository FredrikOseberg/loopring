import React from 'react';
import loopringLogo from '../../img/logo.png';
import './header.css';

const Header = () => (
	<div className="loopring--header">
		<div className="loopring--header--container">
			<img src={loopringLogo} alt="Loopring" />
			<div className="loopring--header--navigation">My Navigation</div>
		</div>
	</div>
);

export default Header;
