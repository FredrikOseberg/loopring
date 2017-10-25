import React from 'react';
import './loopringheadericon.css';

const HeaderIcon = props => (
	<div className={`loopring--headericon loopring--headericon--${props.color}`}>
		<i className="material-icons hiw--icon" aria-hidden="true">
			{props.icon}
		</i>
	</div>
);

export default HeaderIcon;
