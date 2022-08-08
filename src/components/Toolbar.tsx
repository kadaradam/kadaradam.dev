import { AppBar, Box, Toolbar as ToolbarMui } from '@mui/material';
import DownloadCVButton from './DownloadCVButton';
import { NotificationsButton } from './NotificationsButton';
import ToggleThemeButton from './ToggleThemeButton';

const Toolbar = () => (
	<AppBar position="static" color="default">
		<ToolbarMui variant="dense">
			<Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
				<Box display="flex" alignItems="center" />
				<Box display="flex" alignItems="center">
					<DownloadCVButton />
					<NotificationsButton />
					<ToggleThemeButton />
				</Box>
			</Box>
		</ToolbarMui>
	</AppBar>
);

export default Toolbar;
