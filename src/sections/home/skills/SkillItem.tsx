import { Box, Card as MuiCard } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { SkillType } from 'src/types';

interface ExperienceItemProps {
	index: number;
	item: SkillType;
}

const SkillItem = ({ item }: ExperienceItemProps) => (
	<Card variant="outlined">
		<Box sx={{ my: 'auto' }}>
			<Image src={item.img} alt={item.name} />
		</Box>
		<Box sx={{ typography: 'body1', fontWeight: 'bold', marginTop: 'auto' }}>{item.name}</Box>
	</Card>
);

const Card = styled(MuiCard)(({ theme }) => ({
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	padding: theme.spacing(1),
	textAlign: 'center',
}));

export default SkillItem;
