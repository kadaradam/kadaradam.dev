export type ExperienceType = {
	_id: string;
	companyName: string;
	description: string;
	role: string;
	startDate: Date;
	endDate: Date | undefined;
	tags: string[];
};
