import Navigation from '@components/Navigation';
import Toolbar from '@components/Toolbar';
import { Container, Grid } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Education, Experience, Hobbies, Language, Profile, Skills } from 'src/sections/home';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Adam Kadar - Full Stack Developer</title>
				<meta name="description" content="Full Stack Developer Portfolio and CV" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Toolbar />
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
							<Education />
							<Skills />
							<Language />
							<Hobbies />
						</Grid>
					</Grid>
				</Container>
			</main>
		</div>
	);
};

export default Home;
