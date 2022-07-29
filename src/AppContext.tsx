import { createContext, useContext, useEffect, useReducer } from 'react';
import { ThemeType } from './types';

type AppContextType = {
	theme: ThemeType;
	setTheme: React.Dispatch<ThemeType>;
};

const AppContext = createContext<AppContextType>({
	theme: 'system',
	setTheme: () => {
		return '';
	},
});

export const useAppContext = () => {
	const appContext = useContext(AppContext);

	return appContext;
};

const darkModeReducer = (_: any, theme: ThemeType): ThemeType => theme;

export function AppContextProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useReducer(darkModeReducer, 'system');

	useEffect(() => {
		const savedTheme = localStorage.theme as ThemeType;

		if (savedTheme) {
			setTheme(savedTheme);
		}
	}, []);

	return (
		<AppContext.Provider
			value={{
				theme,
				setTheme: (mode: ThemeType) => {
					// Do not save system theme
					if (mode === 'system') {
						return;
					}

					localStorage.setItem('theme', mode);
					setTheme(mode);
				},
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
