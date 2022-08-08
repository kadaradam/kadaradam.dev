import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, IconButton } from '@mui/material';
import { useAppContext } from 'src/AppContext';

const ToggleThemeButton = () => {
	const { setTheme, theme } = useAppContext();

	const handleThemeToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<Box>
			<IconButton
				onClick={handleThemeToggle}
				aria-label="toggle-theme"
				sx={{ color: 'white' }}
			>
				{theme === 'light' ? (
					<DarkModeIcon sx={{ fontSize: 20 }} />
				) : (
					<LightModeIcon sx={{ fontSize: 20 }} />
				)}
			</IconButton>
		</Box>
	);
};

export default ToggleThemeButton;
