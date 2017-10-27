import React from 'react';
import loopring from '../../img/logo.png';
import './footer.css';

const Footer = () => (
	<div className="footer">
		<div className="footer--container">
			<div className="footer--header">
				<div className="footer--logo">
					<img src={loopring} alt="Loopring" />
					<h1>Loopring</h1>
				</div>
				<p className="footer--rights">
					<i className="material-icons">copyright</i>All rights reserved
				</p>
			</div>
			<div className="footer--telegram">
				<div className="footer--telegram--header">
					<i className="fa fa-paper-plane" aria-hidden="true" />
					<h4>Telegram</h4>
				</div>
				<ul>
					<a href="https://t.me/loopringorg" target="_blank" rel="noopener noreferrer">
						<li>Telegram Announcement Channel (Chinese)</li>
					</a>
					<a href="https://t.me/loopringfans" target="_blank" rel="noopener noreferrer">
						<li>Telegram discussion (Chinese)</li>
					</a>
					<a href="https://t.me/loopringinternational" target="_blank" rel="noopener noreferrer">
						<li>Telegram discussion (English)</li>
					</a>
				</ul>
			</div>
			<div className="footer--social">
				<div className="footer--social--header">
					<h4>Stay in the loop</h4>
				</div>
				<div className="footer--social--container">
					<div className="footer--social--group--one">
						<a href="https://github.com/loopring" target="_blank" rel="noreferrer noopener">
							<i className="fa fa-github-alt" aria-hidden="true" />
						</a>
						<a href="https://loopring-team.slack.com/" target="_blank" rel="noreferrer noopener">
							<i className="fa fa-slack" aria-hidden="true" />
						</a>
						<a href="https://twitter.com/loopringorg" target="_blank" rel="noreferrer noopener">
							<i className="fa fa-twitter" aria-hidden="true" />
						</a>
					</div>
					<div className="footer--social--group--two" target="_blank" rel="noreferrer noopener">
						<a href="mailto:foundation@loopring.org">
							<i className="fa fa-envelope" aria-hidden="true" />
						</a>
						<a href="https://medium.com/@loopring" target="_blank" rel="noreferrer noopener">
							<i className="fa fa-medium" aria-hidden="true" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
