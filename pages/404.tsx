import { Box, Button, Container as MuiContainer, Typography } from '@mui/material';
import { styled } from '@mui/system';

const PageNotFound = () => (
	<Container>
		<Typography variant="h4" align="center">
			<strong>404</strong> Page not found
		</Typography>
		<Box display="flex" justifyContent="center" sx={{ pt: 4 }}>
			<Button href="/" variant="outlined" color="secondary" disableElevation size="small">
				Go Home
			</Button>
		</Box>
	</Container>
);
const Container = styled(MuiContainer)(({ theme }) => ({
	position: 'absolute',
	left: '50%',
	top: '50%',
	transform: 'translate(-50%, -50%)',
}));

export default PageNotFound;
