import { Box, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';

interface SectionProps {
	title: string;
	children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
	// Fix Emotion TS error issue:  Property 'children' does not exist on type SlideProps.
	// @ts-ignore
	<Fade triggerOnce cascade duration={1000}>
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

export default Section;
