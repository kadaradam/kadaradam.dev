import WaveAnimatedEmoji from '@components/WaveAnimatedEmoji';
import { css } from '@emotion/react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessIcon from '@mui/icons-material/Business';
import CakeIcon from '@mui/icons-material/Cake';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import { Box, Button, Divider, Tooltip } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from 'public/me.jpeg';
import { Slide } from 'react-awesome-reveal';

const profileProps = {
	full_name: 'Adam Kadar',
	role: 'Full Stack Developer',
	linkedin_url: 'https://www.linkedin.com/in/kadaradam/',
	contact_email: 'contact@kadaradam.dev',
	birth_day: '12 November 1996',
	company: 'ViddL',
	location: 'Hungary, Budapest',
	blog: 'https://kadaradam.dev/',
	linkedin_username: 'kadaradam',
	html_url: 'https://github.com/kadaradam',
	name: 'kadaradam',
	upwork_url: 'https://www.upwork.com/freelancers/~01a0eabd3fc37e7675',
};

export const Profile = () => (
	// Fix Emotion TS error issue:  Property 'children' does not exist on type SlideProps.
	// @ts-ignore
	<Slide triggerOnce>
		<Box>
			<Image
				src={profilePic}
				css={css`
					width: 100%;
					height: 100%;
					border-radius: 50%;
					border: 1px solid #30363d;
				`}
				alt="Avatar"
				priority
			/>

			<div
				css={css`
					position: relative;
				`}
				id="ignore-avatar-badge"
			>
				<Tooltip title="Hey there!" placement="bottom">
					<AvatarBadge>🎉</AvatarBadge>
				</Tooltip>
			</div>
		</Box>
		<Box sx={{ py: 2 }}>
			<Box sx={{ typography: 'h4', fontWeight: 600 }}>{profileProps.full_name}</Box>
			<Box sx={{ typography: 'h6', fontWeight: 300, color: '#8b9493' }}>
				{profileProps.role}
			</Box>
		</Box>
		<Button
			href={profileProps.linkedin_url}
			startIcon={<LinkedInIcon />}
			style={{ textTransform: 'capitalize' }}
			variant="outlined"
			fullWidth
			disableRipple
			disableElevation
			color="secondary"
		>
			Connect
		</Button>
		<Box sx={{ pt: 3 }}>
			Hi! <WaveAnimatedEmoji>👋</WaveAnimatedEmoji> My name is Adam. I&apos;m a self-taught
			full stack developer in Budapest, with a passion for web and mobile application
			development. I love learning new skills and constantly improving my habits through
			self-development.
		</Box>
		<Box sx={{ py: 2 }}>
			<IconWithTextItem
				href={`mailto:${profileProps.contact_email}`}
				icon={<AlternateEmailIcon fontSize="small" />}
				label={profileProps.contact_email}
			/>
			<IconWithTextItem icon={<CakeIcon fontSize="small" />} label={profileProps.birth_day} />
			<IconWithTextItem
				icon={<BusinessIcon fontSize="small" />}
				label={profileProps.company}
			/>
			<IconWithTextItem
				icon={<LocationOnIcon fontSize="small" />}
				label={profileProps.location}
			/>
			<IconWithTextItem
				href={profileProps.blog}
				icon={<LinkIcon fontSize="small" />}
				label={profileProps.blog}
			/>
			<IconWithTextItem
				href={profileProps.linkedin_url}
				icon={<LinkedInIcon fontSize="small" />}
				label={profileProps.linkedin_username}
			/>
			<IconWithTextItem
				href={profileProps.html_url}
				icon={<GitHubIcon fontSize="small" />}
				label={profileProps.name}
			/>
			<IconWithTextItem
				href={profileProps.upwork_url}
				icon={<WorkIcon fontSize="small" />}
				label="Upwork"
			/>
		</Box>
		<Divider />
	</Slide>
);

type IconWithTextItemProps = {
	icon: JSX.Element;
	label: string;
	href?: string;
};

// TODO: Separate component and refactor
const IconWithTextItem = ({ icon, label, href }: IconWithTextItemProps) => {
	const hasLink = !!href; // Create clickable button if it has link

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<Box sx={{ pr: 0.75, display: 'flex', py: 0.3 }}>{icon}</Box>

			<Box sx={{ typography: 'body2', lineHeight: 'none' }}>
				{hasLink ? (
					<Link href={href} passHref>
						<a
							css={(theme) => css`
								color: rgb(139, 148, 158);
								text-decoration: none;
								&:hover {
									color: ${theme.palette.azure.main};
								}
							`}
						>
							{label}
						</a>
					</Link>
				) : (
					label
				)}
			</Box>
		</Box>
	);
};

const AvatarBadge = styled('div')(({ theme }) => ({
	position: 'absolute',
	bottom: 0,
	left: '100%',
	width: '42px',
	height: '42px',
	marginBottom: '32px',
	marginLeft: '-48px',
	borderRadius: '50%',
	border: '1px solid #30363d',
	backgroundColor: theme.palette.background.default,
	textAlign: 'center',
	paddingTop: '6px',
}));
