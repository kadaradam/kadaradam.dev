/* eslint-disable react/no-children-prop */
import ExperienceTags from '@components/ExperienceTags';
import { Box, CardContent, Chip, Card as MuiCard, Typography } from '@mui/material';
import { styled } from '@mui/system';
import moment from 'moment';
import Markdown from 'react-markdown';
import { ExperienceType } from '../../../types';

type ExperienceItemProps = {
	item: ExperienceType;
};

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
				<Box sx={{ marginTop: 'auto' }}>
					{item.role ? (
						<Chip
							label={item.role}
							variant="outlined"
							size="small"
							sx={{ marginTop: 1, marginRight: 1 }}
						/>
					) : null}
					<ExperienceTags tags={item.tags} />
				</Box>
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
