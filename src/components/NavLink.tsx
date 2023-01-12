import MuiLink, { LinkProps } from '@mui/material/Link';
import { styled } from '@mui/system';

const NavLink = styled((props: LinkProps) => (
	<MuiLink variant="body1" underline="hover" {...props} />
))(({ theme }) => ({
	color: 'white',
	padding: theme.spacing(1),
}));

export default NavLink;
