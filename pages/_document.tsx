import createEmotionServer from '@emotion/server/create-instance';
import { Theme } from '@mui/material';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import createEmotionCache from '../src/createEmotionCache';
import useTheme from '../src/hooks/useTheme';

interface WithThemeProps {
	theme: Theme;
}

function withTheme<T extends WithThemeProps = WithThemeProps>(
	WrappedComponent: React.ComponentType<T>
) {
	// Try to create a nice displayName for React Dev Tools.
	const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	// Creating the inner component. The calculated Props type here is the where the magic happens.
	const ComponentWithTheme = (props: Omit<T, keyof WithThemeProps>) => {
		// Fetch the props you want to inject. This could be done with context instead.
		const themeProps = useTheme();

		// props comes afterwards so the can override the default ones.
		return <WrappedComponent {...themeProps} {...(props as T)} />;
	};

	ComponentWithTheme.displayName = `withTheme(${displayName})`;

	return ComponentWithTheme;
}

class MyDocument extends Document<WithThemeProps> {
	render() {
		const theme = this.props.theme;

		return (
			<Html lang="en">
				<Head>
					{/* PWA primary color */}
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link rel="shortcut icon" href="/static/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<meta name="emotion-insertion-point" content="" />
					<meta name="viewport" content="initial-scale=1, width=device-width" />
					{(this.props as any).emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	const originalRenderPage = ctx.renderPage;

	// You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.
	const cache = createEmotionCache();
	const { extractCriticalToChunks } = createEmotionServer(cache);

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App: any) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />;
				},
		});

	const initialProps = await Document.getInitialProps(ctx);
	// This is important. It prevents Emotion to render invalid HTML.
	// See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
	const emotionStyles = extractCriticalToChunks(initialProps.html);
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			key={style.key}
			// eslint-disable-next-line react/no-danger
			dangerouslySetInnerHTML={{ __html: style.css }}
		/>
	));

	return {
		...initialProps,
		emotionStyleTags,
	};
};

export default withTheme(MyDocument);
