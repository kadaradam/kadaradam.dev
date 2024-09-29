import { AppBar, Box, Toolbar as ToolbarMui } from '@mui/material';
import { Container } from '@mui/system';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import DownloadCVButton from './DownloadCVButton';
import NavLink from './NavLink';
import { NotificationsButton } from './NotificationsButton';
import ToggleThemeButton from './ToggleThemeButton';

const Toolbar = () => {
	const router = useRouter();
	const isMainPage = router.pathname === '/';
	return (
		<AppBar position="static" color="default">
			<ToolbarMui component="nav" variant="dense">
				<Container>
					<Box
						width="100%"
						display="flex"
						alignItems="center"
						justifyContent="space-between"
					>
						<Box>
							<NextLink href="/" passHref>
								<NavLink>Me</NavLink>
							</NextLink>
							<NextLink href="/works" passHref>
								<NavLink>Works</NavLink>
							</NextLink>
						</Box>
						<Box>
							{isMainPage ? <DownloadCVButton /> : null}
							<NotificationsButton />
							<ToggleThemeButton />
						</Box>
					</Box>
				</Container>
			</ToolbarMui>
		</AppBar>
	);
};

export default Toolbar;
