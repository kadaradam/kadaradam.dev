import Section from '@components/Section';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import SavingsIcon from '@mui/icons-material/Savings';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Grid } from '@mui/material';
import { HobbieType } from 'src/types';
import HobbieItem from './HobbieItem';

const HOBBIE_LIST: HobbieType[] = [
	{
		_id: 'skill-0',
		name: 'Videography & Photography',
		iconElement: PhotoCameraIcon,
	},
	{
		_id: 'skill-1',
		name: 'Books',
		iconElement: MenuBookIcon,
	},
	{
		_id: 'skill-2',
		name: 'Music',
		iconElement: MusicNoteIcon,
	},
	{
		_id: 'skill-3',
		name: 'Gym',
		iconElement: FitnessCenterIcon,
	},
	{
		_id: 'skill-5',
		name: 'Finance',
		iconElement: SavingsIcon,
	},
	{
		_id: 'skill-6',
		name: 'Investing',
		iconElement: ShowChartIcon,
	},
];

export const Hobbies = () => (
	<Section title="Hobbies">
		<Grid container>
			{HOBBIE_LIST.map((item) => (
				<Grid item key={item._id} sx={{ mr: 6, mb: 3 }}>
					<HobbieItem item={item} />
				</Grid>
			))}
		</Grid>
	</Section>
);
