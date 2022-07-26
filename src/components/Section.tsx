import { Box, Typography } from '@mui/material';

interface SectionProps {
	title: string;
	children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
	return (
		<Box sx={{ width: '100%', paddingBottom: 3 }} id={title.toLowerCase()}>
			<>
				<Typography variant="h6" gutterBottom>
					{title}
				</Typography>
				{children}
			</>
		</Box>
	);
};

export default Section;
