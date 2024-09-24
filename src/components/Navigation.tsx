import LanguageIcon from '@mui/icons-material/LanguageOutlined';
import ModelTrainingIcon from '@mui/icons-material/ModelTrainingOutlined';
import NaturePeopleIcon from '@mui/icons-material/NaturePeopleOutlined';
import PsychologyIcon from '@mui/icons-material/PsychologyOutlined';
import { Box, Container, Grid, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

const Navigation = () => {
	const [value, setValue] = useState('experience');

	const handleChange = (_: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);

		const elem = document.getElementById(newValue.toLowerCase());

		if (!elem) {
			return;
		}

		elem.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<Box sx={{ mt: { xs: 0, md: 4 }, borderBottom: 1, borderColor: 'divider' }}>
			<Container>
				<Grid container>
					<Grid
						item
						sm={12}
						md={3}
						sx={{ display: { xs: 'none', md: 'block' }, mt: { xs: 5, md: -5 }, px: 2 }}
					/>
					<Grid item sm={12} md={9} sx={{ width: '100%', pt: 2, px: { xs: 0, md: 2 } }}>
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor="secondary"
							textColor="inherit"
							variant="scrollable"
							scrollButtons="auto"
						>
							<Tab
								value="experience"
								label="Experience"
								icon={<ModelTrainingIcon />}
								iconPosition="start"
							/>
							{/* <Tab
								value="education"
								label="Education"
								icon={<SchoolIcon />}
								iconPosition="start"
							/> */}
							<Tab
								value="skills"
								label="Skills"
								icon={<PsychologyIcon />}
								iconPosition="start"
							/>
							<Tab
								value="languages"
								label="Languages"
								icon={<LanguageIcon />}
								iconPosition="start"
							/>
							<Tab
								value="hobbies"
								label="Hobbies"
								icon={<NaturePeopleIcon />}
								iconPosition="start"
							/>
						</Tabs>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Navigation;
