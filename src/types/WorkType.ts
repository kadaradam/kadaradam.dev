import { ExperienceTagsType } from './ExperienceType';

export type WorkType = {
	path: string;
	title: string;
	description: string;
	website?: string;
	logo: string;
	images: string[];
	stack: ExperienceTagsType[];
};
