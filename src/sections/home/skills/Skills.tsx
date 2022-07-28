import { Box, Chip, Grid, Typography } from '@mui/material';
import BashImg from 'public/skills/bash.png';
import CssImg from 'public/skills/css.png';
import ExpressImg from 'public/skills/express.png';
import GatsbyImg from 'public/skills/gatsby.png';
import GitImg from 'public/skills/git.png';
import HtmlImg from 'public/skills/html.png';
import JavaScriptImg from 'public/skills/js.png';
import MongoDBImg from 'public/skills/mongo.png';
import NestJSImg from 'public/skills/nestjs.png';
import NodeJSImg from 'public/skills/node.png';
import ReactImg from 'public/skills/react.png';
import SeleniumImg from 'public/skills/selenium.png';
import TailwindImg from 'public/skills/tailwind.png';
import TypeScriptImg from 'public/skills/typescript.png';
import VueImg from 'public/skills/vue.png';

import Section from '@components/Section';
import { SkillType } from 'src/types';
import SkillItem from './SkillItem';

const SKILL_LIST: SkillType[] = [
	{
		_id: 'skill-html',
		name: 'HTML',
		img: HtmlImg,
	},
	{
		_id: 'skill-css',
		name: 'CSS',
		img: CssImg,
	},
	{
		_id: 'skill-js',
		name: 'JavaScript',
		img: JavaScriptImg,
	},
	{
		_id: 'skill-ts',
		name: 'TypeScript',
		img: TypeScriptImg,
	},
	{
		_id: 'skill-vue',
		name: 'Vue',
		img: VueImg,
	},
	{
		_id: 'skill-react',
		name: 'React',
		img: ReactImg,
	},
	{
		_id: 'skill-reactnative',
		name: 'React Native',
		img: ReactImg,
	},
	{
		_id: 'skill-gatsby',
		name: 'Gatsby',
		img: GatsbyImg,
	},
	{
		_id: 'skill-nest',
		name: 'NestJS',
		img: NestJSImg,
	},
	{
		_id: 'skill-exp',
		name: 'Express',
		img: ExpressImg,
	},
	{
		_id: 'skill-mongo',
		name: 'MongoDB',
		img: MongoDBImg,
	},
	{
		_id: 'skill-git',
		name: 'Git',
		img: GitImg,
	},
	{
		_id: 'skill-node',
		name: 'NodeJS',
		img: NodeJSImg,
	},
	{
		_id: 'skill-selenium',
		name: 'Selenium',
		img: SeleniumImg,
	},
	{
		_id: 'skill-bash',
		name: 'Bash',
		img: BashImg,
	},
	{
		_id: 'skill-tailwind',
		name: 'Tailwind',
		img: TailwindImg,
	},
];

const PERSONAL_SKILL_LIST = [
	'Adaptability',
	'Enthusiasm',
	'Earnestness',
	'Quick learner',
	'Collaboration',
	'Calmness',
	'Determination',
	'Patience',
];

export const Skills = () => {
	const workItemClassName = 'work-skill-item';
	const personalItemClassName = 'personal-skill-item';

	return (
		<Section title="Skills">
			<Box display="flex" flexDirection="row" alignItems="center">
				<Typography variant="body1" sx={{ my: 2 }}>
					Work
				</Typography>
			</Box>
			<Grid container rowSpacing={3} columnSpacing={3} alignItems="stretch">
				{SKILL_LIST.map((item, index) => (
					<Grid item key={item._id} sm={4} md={2} className={workItemClassName}>
						<SkillItem index={index} item={item} />
					</Grid>
				))}
			</Grid>

			<Typography variant="body1" sx={{ my: 2 }}>
				Personal
			</Typography>
			<Grid container spacing={1}>
				{PERSONAL_SKILL_LIST.map((item) => (
					<Grid item key={item} className={personalItemClassName}>
						<Chip label={item} />
					</Grid>
				))}
			</Grid>
		</Section>
	);
};
