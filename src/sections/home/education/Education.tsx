import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineOppositeContent,
	TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import moment from 'moment';
import Section from '../../../components/Section';

const EDUCATION_LIST = [
	{
		_id: 'edu-0',
		schoolName: 'Gábor Dénes Főiskola',
		description:
			'Business Informatics Engineer\nAccounting, SQL Database, Java basics, Marketing',
		startDate: new Date(2016, 9 - 1),
		endDate: undefined,
	},
];

export const Education = () => (
	<Section title="Education">
		<Timeline position="alternate">
			{EDUCATION_LIST.map((item) => (
				<TimelineItem key={item._id}>
					<TimelineOppositeContent variant="body2" color="text.secondary">
						{moment(item.startDate).format('MMMM YYYY')} -{' '}
						{item.endDate ? moment(item.endDate).format('MMMM YYYY') : ''}
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineDot
							variant="outlined"
							css={(theme) => `border-color: ${theme.palette.azure.main};`}
						/>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>
						<Typography>{item.schoolName}</Typography>
						<Typography variant="caption" style={{ whiteSpace: 'pre-line' }}>
							{item.description}
						</Typography>
					</TimelineContent>
				</TimelineItem>
			))}
		</Timeline>
	</Section>
);
