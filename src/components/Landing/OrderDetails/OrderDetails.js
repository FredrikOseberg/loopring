import React from 'react';
import './loopringorderdetails.css';

const OrderDetails = props => (
	<div className={`orderdetails--card--order orderdetails--card--order--${props.color}`}>
		<div className="orderdetails--card--order--container">
			<div className="orderdetails--card--order--header">
				<div className="orderdetails--card-order--header--img">
					<i className={`cc ${props.fromSymbol}`} />
				</div>
				<div className="orderdetails--card--order--header--information">
					<h2>{props.name} Transaction</h2>
					<p>Hash: cf23df2207d99a74fbe169e3eba035e633b65d94</p>
				</div>
			</div>

			<div className="orderdetails--card--order--header--border" />

			<div className="orderdetails--card--order--header--transaction">
				<div className="orderdetails--order--header--transaction--from">
					<i className={`cc ${props.fromSymbol}`} />
					<p className="orderdetails--order--header--transaction--amount">
						{props.fromAmount} {props.fromSymbol}
					</p>
				</div>
				<i className="material-icons">swap_horiz</i>
				<div className="orderdetails--order--header--transaction--to">
					<i className={`cc ${props.toSymbol}`} />
					<p className="orderdetails--order--header--transaction--amount">
						{props.toAmount} {props.toSymbol}
					</p>
				</div>
			</div>

			<div className="orderdetails--card--order--header--border" />

			<div className="orderdetails--card--order--status--container">
				<div className="orderdetails--card--order--status--information">
					<i className="material-icons">settings</i>
					<div className="orderdetails--card--order--status">
						<h3>Status</h3>
						<p>
							<i className="material-icons">lock</i>
							{props.fromAmount} {props.fromSymbol} locked in smart contract.
						</p>
					</div>
				</div>

				<div className="orderdetails--card--order--status--progress">
					<p>Progress</p>
					<div className="orderdetails--card--order--progress--bar">
						<div className="orderdetails--card--order--progress--bar--progress" />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default OrderDetails;
