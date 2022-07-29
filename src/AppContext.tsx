import { createContext, useContext, useState } from 'react';
import { ThemeType } from './types';

type AppContextType = {
	theme: ThemeType;
	setTheme: (theme: ThemeType) => void;
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

export function AppContextProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<ThemeType>('system');

	return (
		<AppContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}
