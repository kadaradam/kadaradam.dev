// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import chromium from 'chrome-aws-lambda';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Buffer>) {
	if (req.method === 'POST') {
		try {
			const pdfBuffer = await generatePageAsPdf({ mode: 'light' });

			return res
				.setHeader('Content-Type', 'application/pdf')
				.setHeader('Content-Length', '' + pdfBuffer.length)
				.end(pdfBuffer);
		} catch (err) {
			console.error(`Failed to call generatePageAsPdf(). Error: ${err}`);

			return res.status(500).end();
		}
	} else {
		return res.status(405).end();
	}
}
type GeneratePageAsPdArgs = {
	mode: 'dark' | 'light';
};

async function generatePageAsPdf({ mode }: GeneratePageAsPdArgs): Promise<Buffer> {
	await chromium.font(
		'https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf'
	);

	const browser = await chromium.puppeteer.launch({
		args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
		defaultViewport: chromium.defaultViewport,
		executablePath: await chromium.executablePath,
		headless: true,
		ignoreHTTPSErrors: true,
	});
	const page = await browser.newPage();
	const websiteUrl = process.env.NEXT_WEBSITE_URL;

	if (!websiteUrl) {
		throw new Error('NEXT_WEBSITE_URL env not found.');
	}

	console.log(`Generating pdf... ${websiteUrl}`);

	await page.setViewport({ width: 978, height: 1024 });
	page.setUserAgent(
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36 WAIT_UNTIL=load'
	);
	await page.goto(websiteUrl, {
		waitUntil: 'networkidle2',
	});

	if (mode === 'dark') {
		await page.emulateMediaFeatures([
			{
				name: 'prefers-color-scheme',
				value: 'dark',
			},
		]);

		// Sets print color, so the background won't be white.
		// Currenlty it is not working with MUI
		await page.addStyleTag({
			content: `
		  body {
			-webkit-print-color-adjust: exact !important;
			-webkit-filter: opacity(1) !important;
		  }
		`,
		});
	}

	// Wait page to load
	await page.waitForTimeout(1000);

	await page.evaluate(() => {
		// Remove not wanted elements from DOM
		const toolbar = document.querySelector('header');

		if (toolbar?.parentNode) {
			toolbar.parentNode.removeChild(toolbar);
		}

		const navigation = document.getElementById('navigation');

		if (navigation?.parentNode) {
			navigation.parentNode.removeChild(navigation);
		}

		const avatarBadge = document.querySelector('#ignore-avatar-badge');

		if (avatarBadge?.parentNode) {
			avatarBadge.parentNode.removeChild(avatarBadge);
		}

		// Scroll to bottom to trigger images to load & reveal hidden sections
		window.scrollBy(0, window.document.body.scrollHeight);
	});

	// Wait to finish animations: scroll, reveal
	await page.waitForTimeout(1000);

	const scrollHeight = await page.evaluate(() => window.document.body.scrollHeight);
	const scale = 0.75;

	const pdf = await page.pdf({
		printBackground: true,
		scale,
		width: 978,
		height: scrollHeight * scale,
		landscape: false,
	});

	await browser.close();

	return pdf;
}
