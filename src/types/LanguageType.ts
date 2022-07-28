import { CircularProgressProps } from '@mui/material/CircularProgress';

export type LanguageType = {
	_id: string;
	name: string;
	description: string;
	value: number;
	color: CircularProgressProps['color'];
};
