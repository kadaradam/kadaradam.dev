import { Grid } from '@mui/material';
import Section from '../../../components/Section';
import { ExperienceType } from '../../../types';
import ExperienceItem from './ExperienceItem';

const EXPERIENCE_LIST: ExperienceType[] = [
	{
		_id: 'exp-0',
		companyName: 'Hobbie Project',
		role: '',
		description:
			'**GTA SA:MP**: Created an online GTA San Andreas Multiplayer **game server** where players can connect and play with each other. Added **Control panel** on the web, to let users manage their in-game account. **Learnt the basics of programming.**',
		startDate: new Date(2011, 3 - 1),
		endDate: new Date(2016, 10 - 1),
		tags: ['Pawn', 'CSS', 'PHP', 'MySQL'],
	},
	{
		_id: 'exp-1',
		companyName: 'EDMdesigner',
		role: 'QA ENGINEER',
		description: '**Chamaileon** - Created automated tests for the site.',
		startDate: new Date(2018, 7 - 1),
		endDate: new Date(2018, 9 - 1),
		tags: ['JavaScript'],
	},
	{
		_id: 'exp-2',
		companyName: 'EDMdesigner',
		role: 'FULL STACK DEVELOPER',
		description:
			'**Chamaileon** - Developed a responsive, real-time **email template builder** with a **drag and drop surface**. **Rest API** and backend maintenance. Built a **Single-Page Application** and **Micro Frontends** for SDK. Contributed to a web **payment system**. Implemented **Amazon Cognito** for user authentication.',
		startDate: new Date(2018, 9 - 1),
		endDate: new Date(2021, 6 - 1),
		tags: ['Vue.js', 'Express', 'MongoDB', 'JavaScript', 'CSS'],
	},
	{
		_id: 'exp-3',
		companyName: 'Cargo-Viszed Kft.',
		role: 'FULL STACK DEVELOPER',
		description:
			'ViddL - I have contributed to the development of a **Last Mile Delivery Application**. The application includes a web application for uploading, managing, and assigning packages to couriers. It also has a **mobile app** to assist couriers with handling deliveries.',
		startDate: new Date(2021, 6 - 1),
		endDate: new Date(2022, 12 - 1),
		tags: ['React', 'React Native', 'Next.js', 'NestJS', 'MongoDB', 'TypeScript', 'CSS'],
	},
	{
		_id: 'exp-4',
		companyName: 'Cogito Technologies Kft.',
		role: 'FULL STACK DEVELOPER',
		description:
			'**Hungarian Startup University Program** - I have contributed to the development of an **E-learning platform** that is accessible both on web and mobile. The platform provides courses on creating a business, startup principles, and entrepreneurship, and is exclusively available for university students.',
		startDate: new Date(2021, 6 - 1),
		endDate: new Date(2022, 8 - 1),
		tags: ['React', 'React Native', 'NestJS', 'MongoDB', 'TypeScript', 'CSS'],
	},
	{
		_id: 'exp-5',
		companyName: 'Freelance Software Engineer',
		role: 'FREELANCER',
		description:
			'Freelancer, specialised in **web and mobile application development**. My main responsibilities were: **communicating with clients, architecture planning, building the application**.',
		startDate: new Date(2022, 12 - 1),
		endDate: new Date(2023, 4 - 1),
		tags: [
			'React',
			'Next.js',
			'Vue.js',
			'React Native',
			'NestJS',
			'Express',
			'MongoDB',
			'TypeScript',
		],
	},
	{
		_id: 'exp-6',
		companyName: 'Digital Thinkers',
		role: 'FULL STACK DEVELOPER',
		description:
			'I learned **PHP** and set up an **API based on Laravel framework** for a **Danish business management tool** that helps develop **sustainable strategies**. I was responsible for the **frontend development**, communicated with the **client**, and was in charge of performing a successful **data migration**. I also participated in the development of an API for a **Danish educational platform** focusing on **user registration** and **course payments**, which was integrated with **CMS** and **CRM features**.',
		startDate: new Date(2023, 5 - 1),
		endDate: new Date(2024, 4 - 1),
		tags: ['Laravel', 'React', 'Next.js', 'NestJS', 'Express', 'PostgreSQL', 'TypeScript'],
	},
	{
		_id: 'exp-6',
		companyName: 'Betsson Group',
		role: 'FRONTEND DEVELOPER',
		description:
			"I'm currently contributing to the development of multiple Betsson brand frontend websites across the world using Angular and StencilJS.",
		startDate: new Date(2024, 5 - 1),
		endDate: undefined,
		tags: ['Angular', 'RxJS', 'TypeScript'],
	},
];

export const Experience = () => (
	<Section title="Experience">
		<Grid container rowSpacing={1} columnSpacing={1} alignItems="stretch">
			{EXPERIENCE_LIST.sort((a, b) => +new Date(b.startDate) - +new Date(a.startDate)).map(
				(item) => (
					<Grid item sm={12} md={6} key={item._id} width="100%">
						<ExperienceItem item={item} />
					</Grid>
				)
			)}
		</Grid>
	</Section>
);
