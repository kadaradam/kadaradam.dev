import Navigation from '@components/Navigation';
import { Container, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Experience, Hobbies, Language, Profile, Skills } from 'src/sections/home';

const Home: NextPage = () => (
	<main>
		<Navigation />
		<Container>
			<Grid container>
				<Grid
					item
					sm={12}
					md={3}
					sx={{ mt: { xs: 0, md: -5 }, px: 2, pt: { xs: 5, md: 0 } }}
				>
					<Profile />
				</Grid>
				<Grid item sm={12} md={9} sx={{ pt: 2, px: 2 }}>
					<Experience />
					<Skills />
					<Language />
					<Hobbies />
				</Grid>
			</Grid>
		</Container>
	</main>
);

export default Home;
