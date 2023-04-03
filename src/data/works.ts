import { WorkType } from 'src/types';

const newLine = ' \n \n&nbsp;\n \n';

const works: WorkType[] = [
	{
		path: 'xtendr',
		title: 'Xtendr App',
		description:
			'I was entrusted with a task to fully develop the frontend side of a privacy-enhancing data collaboration single page application. As the backend had already been created with Strapi, my task was to work with the endpoints that were already available. The app allows you to create new projects, assign users to projects, and set their roles. You can upload CSV files and create queries for the uploaded data. ' +
			'\n&nbsp;\n&nbsp;Involved technologies: Vite, React Query, Material UI' +
			'\n&nbsp;\n&nbsp;My main tasks included communicating with clients, planning the frontend, and developing the application.',
		logo: '/works/xtendr/logo.png',
		images: [
			'/works/xtendr/app_login.jpg',
			'/works/xtendr/app_user_settings.jpg',
			'/works/xtendr/app_project_users.jpg',
			'/works/xtendr/app_datasets.jpg',
			'/works/xtendr/app_upload_csv.jpg',
			'/works/xtendr/app_run_session.jpg',
			'/works/xtendr/app_build_query.jpg',
		],
		stack: ['React', 'TypeScript', 'CSS'],
	},
	{
		path: 'scrivboard',
		title: 'Scrivboard',
		description:
			'A writer reached out to me looking for a drag and drop software that allows for visualizing stories on movable cards and exporting them in "docx" format. They requested for the application to be a paid service, so I incorporated a monthly/yearly subscription model using Stripe. I also brought on a UX Designer to handle the design.' +
			'\n&nbsp;\n&nbsp;My main tasks included communicating with clients, grasping client and business requirements, planning the architecture, and developing the application.',
		logo: '/works/scrivboard/logo.png',
		images: [
			'/works/scrivboard/app_login.jpg',
			'/works/scrivboard/app_dashboard.jpg',
			'/works/scrivboard/app_editor.jpg',
			'/works/scrivboard/app_export.jpg',
			'/works/scrivboard/app_payment.jpg',
		],
		website: 'https://scrivboard.com/',
		stack: ['React', 'NestJS', 'MongoDB', 'TypeScript', 'CSS'],
	},
	{
		path: 'viddl',
		title: 'Viddl',
		description:
			'I developed a parcel tracking application that displays information about a package when a tracking number is entered. Additionally, I created a notification microservice that sends notifications to recipients when a new parcel event occurs, including conditional emails, SMS, and Facebook Messenger.' +
			newLine +
			'I was also involved in constructing the admin panel for managing parcels, including the ability to process CSV files, manage couriers, and manage individual parcels.' +
			newLine +
			'Furthermore, I assisted in the development of a courier mobile application using React Native, which includes a map view to display delivery addresses and integration with GPE and Ingenico POS terminals for handling payments.',
		logo: '/works/viddl/mobile_map.png',
		images: [
			'/works/viddl/main.jpg',
			'/works/viddl/mobile_map.png',
			'/works/viddl/mobile_screens.jpg',
			'/works/viddl/app_tracking.jpg',
		],
		website: 'https://viddl.hu/',
		stack: [
			'React',
			'React Native',
			'Gatsby',
			'Next.js',
			'NestJS',
			'MongoDB',
			'TypeScript',
			'CSS',
		],
	},
	{
		path: 'hsup',
		title: 'Hungarian Startup University',
		description:
			'I was tasked with developing the landing page for HSUP, a platform where university students can learn about startups, take tests, and form teams to work on their own projects.  The design was already provided in the form of a Figma template.' +
			newLine +
			'Despite the fact that the application was already underway when I joined the development team, I spent a year working on the Web and Mobile application, implementing new features and fixing issues such as managing the news feed, adding push notifications for mobile, allowing for the upload of essays, creating teams, and generating PDF certificates.',
		logo: '/works/hsup/main.png',
		images: [
			'/works/hsup/landing.jpg',
			'/works/hsup/app_login.jpg',
			'/works/hsup/app_dashboard.jpg',
			'/works/hsup/app_lesson.jpg',
			'/works/hsup/app_test.jpg',
			'/works/hsup/app_teams.jpg',
			'/works/hsup/app_projects.jpg',
			'/works/hsup/mobile_dashboard.jpg',
			'/works/hsup/mobile_lessons.jpg',
			'/works/hsup/mobile_test.jpg',
		],
		website: 'https://hsup.nkfih.gov.hu/',
		stack: ['React', 'React Native', 'Gatsby', 'NestJS', 'MongoDB', 'TypeScript', 'CSS'],
	},
	{
		path: 'kkv',
		title: 'KKV Innovációs Platform',
		description:
			'The contractor assigned me the task of creating the landing page for KKV Innovációs Platform. The design was already available and provided as a Figma template.',
		logo: '/works/kkv/main.png',
		images: ['/works/kkv/landing.jpg'],
		website: 'https://kkv.nkfih.gov.hu/',
		stack: ['React', 'Gatsby', 'TypeScript', 'CSS'],
	},
	{
		path: 'evita',
		title: 'Evita családtámogató platform',
		description:
			'The contractor assigned me the task of creating the landing page for Evita. The design was already available and provided as a Figma template.',
		logo: '/works/evita/main.png',
		images: ['/works/evita/landing.jpg'],
		website: 'https://evita.hu/',
		stack: ['React', 'Gatsby', 'TypeScript', 'CSS'],
	},
];

export default works;
