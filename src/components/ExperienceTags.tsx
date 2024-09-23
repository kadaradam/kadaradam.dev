import { Avatar, Chip } from '@mui/material';
import { ExperienceTagsType } from 'src/types';

const tagColors: { [key in ExperienceTagsType]: string } = {
	JavaScript: '#f1e05a',
	CSS: '#563d7c',
	Pawn: '#DBB284',
	PHP: '#4F5D95',
	MySQL: '#F29111',
	TypeScript: '#2b7489',
	MongoDB: '#3FA037',
	'Vue.js': '#42b883',
	Express: '#444',
	React: '#61dafb',
	'React Native': '#6190fb',
	NestJS: '#ea2845',
	'Next.js': '#0070f3',
	Gatsby: '#7026b9',
	Laravel: '#FF2D20',
	PostgreSQL: '#336791',
	Angular: '#DD0031',
	RxJS: '#B7178C',
};

type ExperienceTagsProps = {
	tags: ExperienceTagsType[];
};

const ExperienceTags = ({ tags }: ExperienceTagsProps) => (
	<>
		{tags.map((tagName) => (
			<Chip
				label={tagName}
				key={tagName}
				avatar={<Avatar sx={{ bgcolor: tagColors[tagName] }}>&nbsp;</Avatar>}
				variant="outlined"
				size="small"
				sx={{ marginTop: 1, marginRight: 1 }}
			/>
		))}
	</>
);

export default ExperienceTags;
