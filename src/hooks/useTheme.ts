import useMediaQuery from '@mui/material/useMediaQuery';
import { useMemo } from 'react';
import { useAppContext } from 'src/AppContext';
import createMuiTheme from '../theme';

function useTheme() {
	const { theme: currentTheme } = useAppContext();
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = useMemo(() => {
		if (currentTheme === 'system') {
			return createMuiTheme({ mode: prefersDarkMode ? 'dark' : 'light' });
		}

		return createMuiTheme({ mode: currentTheme === 'light' ? 'light' : 'dark' });
	}, [currentTheme, prefersDarkMode]);

	return theme;
}

export default useTheme;
