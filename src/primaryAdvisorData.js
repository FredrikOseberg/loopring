import xuefeng from './img/Primary Advisors/xuefeng-li.jpg';
import hongfei from './img/Primary Advisors/hongfei.jpg';
import xuyiji from './img/Primary Advisors/xuyiji.jpg';

const primaryAdvisorData = [
	{
		name: 'Xuefeng Li',
		img: xuefeng,
		position: 'Advisor',
		experience: [
			{
				job: 'CTO of Zhongan Tech',
				id: 1
			},
			{
				job: 'Angel Investor (Expertise in Token Exchange and Regulation)',
				id: 2
			}
		],
		id: 1
	},
	{
		name: 'Da Hongfei',
		img: hongfei,
		position: 'Advisor',
		experience: [
			{
				job: 'Founder of NEO',
				id: 1
			},
			{
				job: 'CEO at Onchain',
				id: 2
			}
		],
		id: 2
	},
	{
		name: 'Hitters Xu',
		img: xuyiji,
		position: 'Advisor',
		experience: [
			{
				job: 'Founder of Bitcoin Startup Camp',
				id: 1
			},
			{
				job: ' Blockchain Director at Ant Financial',
				id: 2
			},
			{
				job: 'Founder of Nebula Blockchain (Expertise in Community Operation and Public Blockchain Technology)',
				id: 3
			}
		],
		id: 3
	}
];

export default primaryAdvisorData;
