import xiaoliang from './img/Team/xiaoliang-chen.jpg';
import dan from './img/Team/dan-wang.jpg';
import jay from './img/Team/jay-zhou.jpg';

const teamData = [
	{
		name: 'Daniel Wang',
		img: dan,
		position: 'Founder',
		email: 'daniel@loopring.org',
		experience: [
			{ job: 'Google Tech Lead', id: 1 },
			{ job: 'Cofounder & VP of Yunrang Technology', id: 2 },
			{ job: 'Senior Engineering Director at JD.com', id: 3 },
			{ job: 'Cofounder & CEO of Coinport Exchange', id: 4 },
			{ job: 'Cofounder & VP of Hygene Online', id: 5 },
			{ job: 'Senior Director & Blockchain Researcher of Zhongan Technology', id: 6 }
		],
		id: 1
	},
	{
		name: 'Jay Zhou',
		img: jay,
		position: 'CMO',
		email: 'jay@loopring.org',
		experience: [
			{ job: 'E&Y', id: 1 },
			{ job: 'PayPal Risk Operations', id: 2 },
			{ job: 'SJ Consulting Founder', id: 3 }
		],
		id: 2
	},
	{
		name: 'Johnston Chen',
		img: xiaoliang,
		position: 'COO',
		email: 'xiaoliang@loopring.org',
		experience: [
			{ job: 'Chief Information Officer at 3NOD', id: 1 },
			{ job: 'Product Expert in Finance Industry', id: 2 }
		],
		id: 3
	}
];

export default teamData;
