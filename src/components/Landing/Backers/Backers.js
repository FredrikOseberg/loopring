import React from 'react';
import capital from '../../../img/backers/capital.png';
import fintech from '../../../img/backers/fintech.png';
import ico365 from '../../../img/backers/ico365.png';
import icorace from '../../../img/backers/icorace.png';
import jing from '../../../img/backers/jing.png';
import logo3 from '../../../img/backers/logo3.png';
import neo_en from '../../../img/backers/neo_en.png';
import qtum_en from '../../../img/backers/qtum_en.png';
import './backers.css';

const Backers = () => (
	<div className="loopring--backers">
		<div className="loopring--backers--container">
			<div className="loopring--backers--header">
				<h1>Backers</h1>
				<div className="loopring--backers--section--one">
					<img src={capital} alt="Backer" className="loopring--backers--img" />
					<img src={fintech} alt="Fintech" className="loopring--backers--img" />
					<img src={ico365} alt="ico365" className="loopring--backers--img" />
					<img src={icorace} alt="icorace" className="loopring--backers--img" />
				</div>
				<div className="loopring--backers--section--two">
					<img src={jing} alt="Backer" className="loopring--backers--img" />
					<img src={logo3} alt="Backer" className="loopring--backers--img" />
					<img src={neo_en} alt="Neo" className="loopring--backers--img" />
					<img src={qtum_en} alt="Qtum" className="loopring--backers--img" />
				</div>
			</div>
		</div>
	</div>
);

export default Backers;
