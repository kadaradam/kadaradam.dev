import { Box, Typography } from '@mui/material';
//@ts-ignore
import Fade from 'react-reveal/Fade';

interface SectionProps {
	title: string;
	children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
	return (
		<Fade bottom>
			<Box sx={{ width: '100%', paddingBottom: 3 }} id={title.toLowerCase()}>
				<>
					<Typography variant="h6" gutterBottom>
						{title}
					</Typography>
					{children}
				</>
			</Box>
		</Fade>
	);
};

export default Section;
