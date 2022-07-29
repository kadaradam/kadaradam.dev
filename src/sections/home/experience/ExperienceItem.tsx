/* eslint-disable react/no-children-prop */
import { Avatar, Box, Card as MuiCard, CardContent, Chip, Typography } from '@mui/material';
import { styled } from '@mui/system';
import moment from 'moment';
import Markdown from 'react-markdown';
import { ExperienceType } from '../../../types';

type ExperienceItemProps = {
	item: ExperienceType;
};

type CardBottomSectionProps = {
	tags: string[];
};

const tagColors: { [key: string]: string } = {
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
};

const ExperienceTags = ({ tags }: CardBottomSectionProps) => (
	<Box sx={{ paddingTop: 1, marginTop: 'auto', flexDirection: 'row', flexWrap: 'wrap' }}>
		{tags.map((tagName) => (
			<Chip
				label={tagName}
				key={tagName}
				avatar={<Avatar sx={{ bgcolor: tagColors[tagName] }}>{''}</Avatar>}
				variant="outlined"
				size="small"
				sx={{ marginTop: 1, marginRight: 1 }}
			/>
		))}
	</Box>
);

const ExperienceItem = ({ item }: ExperienceItemProps) => {
	const formatedDate = `${moment(item.startDate).format('MMMM YYYY')} - ${
		item.endDate ? moment(item.endDate).format('MMMM YYYY') : 'present'
	}`;

	return (
		<Card variant="outlined">
			<CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
				{/* Title */}
				<Box sx={{ typography: 'body1', fontWeight: 'bold', color: 'azure.main' }}>
					{item.companyName}
				</Box>
				{/* Subtitle */}
				<Box sx={{ typography: 'caption', fontWeight: 'italic', paddingBottom: 1 }}>
					{formatedDate}
				</Box>
				{/* Content */}
				<Typography variant="body2">
					<Markdown components={{ p: 'span' }} children={item.description} />
				</Typography>
				{/* Bottom tags */}
				<ExperienceTags tags={item.tags} />
			</CardContent>
		</Card>
	);
};

const Card = styled(MuiCard)(({ theme }) => ({
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: theme.palette.background.default,
}));

export default ExperienceItem;
