const faqData = [
	{
		title: 'What is Loopring?',
		answer:
			'Loopring provides traders, participants, and institutions with a decentralized, automated trade execution system that intelligently implements their trades across the world’s crypto exchanges, shielding them from counterparty risk and reducing their trading costs. \
				Loopring intermediates trust between blockchains and exchanges, allowing trading members to retain custody of their funds. For ERC20 tokens initially.',
		id: 1
	},
	{
		title: 'Can we create an exchange based on Loopring? How to make profit?',
		answer:
			'Loopring is an open source protocol, not a traditional, centralized exchange. Any entity under this protocol can participate in order matching. \
		There are two types of Loopring exchange services fees derived from the order matching system: transaction fee and “ring-matching cost saving” fee.',
		id: 2
	},
	{
		title: 'Is Loopring only for ETH blockchain?',
		answer:
			'Loopring intermediates trust between blockchains and exchanges, allowing trading members to retain custody of their funds. It is for ERC20 tokens initially but eventually will be across all blockchains.',
		id: 3
	},
	{
		title: 'Does Loopring take market price orders?',
		answer:
			'Loopring will not take any market price orders at this early stage, because market price orders are prioritized by the placement time. However, due to Loopring’s decentralized mechanism and its attributes, order will not be prioritized by the time.',
		id: 4
	},
	{
		title: 'How to prevent ring-matching being stolen on the blockchain?',
		answer:
			"Under Loopring mechanism, traders' funds remain under their control in a decentralized smart contract on the blockchain.",
		id: 5
	},
	{
		title: 'Does Loopring support order partially match? Would the matched order be canceled or reversed?',
		answer:
			'Loopring can break order into small pieces, identifies the best exchanges and times to trade those pieces on, and applies game theoretic logic to optimize trading results.',
		id: 6
	},
	{
		title: 'Why an order can be mix-matched with several exchanges?',
		answer:
			'Sending Order actually is a command. Sender will broadcast this order to all Loopring protocol connected exchanges in order to partially or fully execute the order, because all the tokens are still kept in the user’s blockchain address during the exchanging process. Transaction clearing and settlement are done within the smart contract.',
		id: 7
	}
];

export default faqData;
