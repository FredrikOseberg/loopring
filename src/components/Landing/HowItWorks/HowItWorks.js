import React from 'react';
import loopring from '../../../img/logo.png';
import OrderDetails from '../OrderDetails/OrderDetails';
import HeaderIcon from '../../Misc/HeaderIcon/HeaderIcon';
import './howitworks.css';

const HowItWorks = () => (
	<div className="landing--hiw">
		<div className="landing--hiw--container">
			<div className="landing--hiw--header">
				<HeaderIcon icon="settings" />
				<h1>How It Works</h1>
				<div className="landing--hiw--inner--container">
					<div className="landing--hiw--connecting--border" />
					<OrderDetails
						name={'Bitcoin'}
						fromIcon={'BTC-alt'}
						toIcon={'ETH'}
						fromAmount={'0.275'}
						toAmount={'4.53'}
						fromSymbol={'BTC'}
						toSymbol={'ETH'}
						color={'green'}
					/>
					<div className="landing--hiw--exchange">
						<img src={loopring} alt="Loopring" />
					</div>
					<OrderDetails
						name={'Omisego'}
						fromIcon={'OMG-alt'}
						toIcon={'ARDR-alt'}
						fromAmount={'5.88'}
						toAmount={'226.16'}
						fromSymbol={'OMG'}
						toSymbol={'ARDR'}
						color={'blue'}
					/>
				</div>
				<div className="landing--hiw--inner--container">
					<div className="landing--hiw--steps">
						<div className="landing--hiw--steps--header">
							<div className="landing--hiw--steps--step">1</div>
							<div className="landing--hiw--steps--title">
								<h4>Step one</h4>
							</div>
						</div>
						<p>A user initiates an exchange of the wanted cryptocurrency exchange.</p>
					</div>
					<div className="landing--hiw--steps">
						<div className="landing--hiw--steps--header">
							<div className="landing--hiw--steps--step">2</div>
							<div className="landing--hiw--steps--title">
								<h4>Step two</h4>
							</div>
						</div>
						<p>
							The coins are locked in a smart contract. The coins stay in the users wallet during the
							entire exchange.
						</p>
					</div>
					<div className="landing--hiw--steps">
						<div className="landing--hiw--steps--header">
							<div className="landing--hiw--steps--step">3</div>
							<div className="landing--hiw--steps--title">
								<h4>Step three</h4>
							</div>
						</div>
						<p>
							Once the exchange is done, the funds are released from the contract and withdrawn/sent to
							the respective parties.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default HowItWorks;
