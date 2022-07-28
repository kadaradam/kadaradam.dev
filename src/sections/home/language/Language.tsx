import Section from '@components/Section';
import { Box, Stack } from '@mui/material';
import { LanguageType } from 'src/types';
import LanguageItem from './LanguageItem';

const LANGUAGE_LIST: LanguageType[] = [
	{
		_id: 'lang-1',
		name: 'Hungarian',
		description: 'Test',
		value: 100,
		color: 'success',
	},
	{
		_id: 'lang-0',
		name: 'English',
		description: 'Test',
		value: 75,
		color: 'warning',
	},
];

export const Language = () => (
	<Section title="Languages">
		<Stack direction="row" spacing={2}>
			{LANGUAGE_LIST.map((item) => (
				<Box key={item._id} sx={{ mr: 5 }}>
					<LanguageItem item={item} />
				</Box>
			))}
		</Stack>
	</Section>
);
