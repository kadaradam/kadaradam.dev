import ExperienceTags from '@components/ExperienceTags';
import NavLink from '@components/NavLink';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Breadcrumbs, Container, Divider, Typography } from '@mui/material';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { default as Link, default as NextLink } from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import Markdown from 'react-markdown';
import works from 'src/data/works';
import { WorkType } from 'src/types';

interface ParamsType extends ParsedUrlQuery {
	id: string;
}

export async function getStaticPaths() {
	const paths = works.map((work) => ({
		params: { id: work.path },
	}));

	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps<{ work: WorkType }> = async ({ params }) => {
	const { id } = params as ParamsType;
	const work = works.find((work) => work.path === id);

	if (!work) {
		return {
			notFound: true,
		};
	}

	return {
		props: { work },
	};
};

const WorkDetailsPage = ({ work }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const hasImageItems = !!work.images.length;
	const hasStackItems = !!work.stack.length;

	return (
		<Container component="main" sx={{ mt: 5 }}>
			<ListBreadcrumbs title={work.title} />
			<Box pt={3}>
				<Typography variant="h3" pb={2}>
					{work.title}
				</Typography>

				<Typography variant="body1" whiteSpace="pre-wrap">
					<Markdown components={{ p: 'span' }}>{work.description}</Markdown>
				</Typography>
				<Box pt={2}>
					{work.website ? (
						<Box pb={0.5}>
							<Tag name="Website" />
							<Link href={work.website} passHref>
								<NavLink target="_blank" sx={{ color: 'rgb(139, 148, 158)' }}>
									{work.website}
								</NavLink>
							</Link>
						</Box>
					) : null}
					{hasStackItems ? (
						<Box display="flex" alignItems="center">
							<Tag name="Stack" />
							<Box sx={{ ml: 1 }}>
								<ExperienceTags tags={work.stack} />
							</Box>
						</Box>
					) : null}
				</Box>
				{hasImageItems ? (
					<Box width="100%">
						<Divider sx={{ my: 4 }} />
						{work.images.map((img) => (
							<Box key={img} position="relative" height={{ xs: 250, sm: 450 }} mb={2}>
								<Image
									src={img}
									alt={work.title}
									layout="fill"
									objectFit="contain"
								/>
							</Box>
						))}
					</Box>
				) : null}
			</Box>
		</Container>
	);
};

const ListBreadcrumbs = ({ title }: { title: string }) => (
	<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
		<NextLink href="/works" passHref>
			<NavLink>Works</NavLink>
		</NextLink>
		<Typography variant="body1">{title}</Typography>
	</Breadcrumbs>
);

const Tag = ({ name }: { name: string }) => (
	<Typography
		variant="caption"
		color="white"
		sx={{ display: 'inline-block', p: 0.5, borderRadius: '3px', backgroundColor: '#4373C4' }}
	>
		{name}
	</Typography>
);

export default WorkDetailsPage;
