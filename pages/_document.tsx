import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import createEmotionServer from '@emotion/server/create-instance';
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import useTheme from 'src/hooks/useTheme';
import createEmotionCache from '../src/createEmotionCache';

interface DocumentProps extends DocumentInitialProps {
	emotionStyleTags: EmotionJSX.Element[];
}

const MyDocument = ({ emotionStyleTags }: DocumentProps) => {
	const theme = useTheme();

	const googleAnaliticsApiKey = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

	return (
		<Html lang="en">
			<Head>
				{/* PWA primary color */}
				<meta name="theme-color" content={theme.palette.primary.main} />
				<link rel="shortcut icon" href="./favicon.ico" />
				<link rel="manifest" href="./manifest.json" />
				<link rel="canonical" href="https://kadaradam.dev" />
				<link rel="apple-touch-icon" href="./logo192.png" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				{/* <!-- Global site tag (gtag.js) - Google Analytics -->*/}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${googleAnaliticsApiKey}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag() {
								dataLayer.push(arguments);
							}
							gtag('js', new Date());

							gtag('config', '${googleAnaliticsApiKey}');
						`,
					}}
				/>
				<meta name="emotion-insertion-point" content="" />
				{emotionStyleTags}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
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

export default MyDocument;
