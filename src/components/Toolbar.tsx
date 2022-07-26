import { AppBar, Box, Toolbar as ToolbarMui } from '@mui/material';

const Toolbar = () => (
	<AppBar position="static" color="default">
		<ToolbarMui variant="dense">
			<Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
				<Box display="flex" alignItems="center" />
				<Box></Box>
			</Box>
		</ToolbarMui>
	</AppBar>
);

export default Toolbar;
