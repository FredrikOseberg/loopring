import React from 'react';
import bitcoin from '../../../../img/BTC-alt.svg';
import ether from '../../../../img/ETC.svg';
import './loopringorderdetails.css';

const OrderDetails = props => (
	<div className="person--card--order">
		<div className="person--card--order--container">
			<div className="person--card--order--header">
				<div className="person--card-order--header--img">
					<i className="cc BTC-alt" />
				</div>
				<div className="person--card--order--header--information">
					<h2>{props.name} Transaction</h2>
					<p>Hash: cf23df2207d99a74fbe169e3eba035e633b65d94</p>
				</div>
			</div>

			<div className="person--card--order--header--border" />

			<div className="person--card--order--header--transaction">
				<div className="person--order--header--transaction--from">
					<i className="cc BTC-alt" />
					<p className="person--order--header--transaction--amount">0.275 BTC</p>
				</div>
				<i className="material-icons">swap_horiz</i>
				<div className="person--order--header--transaction--to">
					<i className="cc ETC" />
					<p className="person--order--header--transaction--amount">4.53 ETH</p>
				</div>
			</div>

			<div className="person--card--order--header--border" />

			<div className="person--card--order--status--container">
				<div className="person--card--order--status--information">
					<i className="material-icons">settings</i>
					<div className="person--card--order--status">
						<h3>Status</h3>
						<p>
							<i className="material-icons">lock</i>0.275 BTC locked in smart contract.
						</p>
					</div>
				</div>

				<div className="person--card--order--status--progress">
					<p>Progress</p>
					<div className="person--card--order--progress--bar">
						<div className="person--card--order--progress--bar--progress" />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default OrderDetails;
