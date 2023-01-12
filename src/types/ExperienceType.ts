export type ExperienceTagsType =
	| 'Pawn'
	| 'CSS'
	| 'PHP'
	| 'MySQL'
	| 'JavaScript'
	| 'MongoDB'
	| 'TypeScript'
	| 'Vue.js'
	| 'Express'
	| 'React'
	| 'NestJS'
	| 'React Native'
	| 'Next.js'
	| 'Gatsby';

export type ExperienceType = {
	_id: string;
	companyName: string;
	description: string;
	role: string;
	startDate: Date;
	endDate: Date | undefined;
	tags: ExperienceTagsType[];
};
