import { css } from '@emotion/react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import NextLink from 'next/link';
import works_data from 'src/data/works';
import { WorkType } from 'src/types';

export const getStaticProps: GetStaticProps<{ works: WorkType[] }> = async () => {
	return {
		props: { works: works_data },
	};
};

const Works = ({ works }: InferGetStaticPropsType<typeof getStaticProps>) => (
	<Container component="main" sx={{ mt: 6 }}>
		<Typography variant="h3" mb={7}>
			Works
		</Typography>
		<Grid container spacing={12}>
			{works.map((work) => (
				<Grid item xs={4} key={work.path}>
					<WorkItem work={work} />
				</Grid>
			))}
		</Grid>
	</Container>
);
export default Works;

const WorkItem = ({ work }: { work: WorkType }) => (
	<NextLink href={`/works/${work.path}`} passHref>
		<a
			// eslint-disable-next-line react/no-unknown-property
			css={css`
				text-decoration: none;
				color: unset;
			`}
		>
			<Box
				display="flex"
				flexDirection="column"
				css={css`
					&:hover {
						transition: transform 450ms;
						transform: translateY(-10px);
					}
				`}
			>
				<Box
					display={{ xs: 'none', sm: 'flex' }}
					justifyContent="center"
					alignItems="center"
				>
					<Image
						src={work.logo}
						alt={work.title}
						width={350}
						height={150}
						objectFit="contain"
					/>
				</Box>
				<Box display="flex" flexDirection="column">
					<Typography variant="h4" pt={3} pb={2}>
						{work.title}
					</Typography>
					<Typography variant="body1" color="#8b9493" fontWeight={300}>
						{work.stack.join(', ')}
					</Typography>
				</Box>
			</Box>
		</a>
	</NextLink>
);
