import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { AppContextProvider } from 'src/AppContext';
import createEmotionCache from '../src/createEmotionCache';
import useTheme from '../src/hooks/useTheme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps,
}: MyAppProps) {
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<AppContextProvider>
				<CustomThemeProvider>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</CustomThemeProvider>
			</AppContextProvider>
		</CacheProvider>
	);
}

type CustomThemeProviderProps = { children: React.ReactNode };

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
	const theme = useTheme();

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
