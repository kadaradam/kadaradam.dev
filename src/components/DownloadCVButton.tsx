import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, CircularProgress, IconButton, Tooltip } from '@mui/material';
import React from 'react';

function saveAsPdf(fileName: string, blob: ArrayBuffer) {
	const link = document.createElement('a');
	link.href = window.URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
	link.download = fileName;
	link.click();
}

const DownloadCVButton = () => {
	const [showTooltip, setShowTooltip] = React.useState<boolean>(false);
	const [pdfGenerateLoading, setPdfGenerateLoading] = React.useState<boolean>(false);

	const handleClick = async () => {
		setShowTooltip(false);
		setPdfGenerateLoading(true);

		try {
			const response = await fetch('/api/generate-cv', { method: 'POST' });

			if (!response.ok) {
				throw new Error('Failed to generate PDF.');
			}

			const data = await response.arrayBuffer();

			saveAsPdf('cv-adam-kadar.pdf', data);
		} catch (err) {
			console.error('Failed to save PDF.');
		} finally {
			setPdfGenerateLoading(false);
		}
	};

	return (
		<Box sx={{ position: 'relative' }}>
			<Tooltip
				title="Download my CV"
				open={showTooltip}
				disableHoverListener
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				<IconButton
					onClick={handleClick}
					disabled={pdfGenerateLoading}
					aria-label="generate-pdf"
					sx={{ color: 'white' }}
				>
					<SaveAltIcon sx={{ fontSize: 20 }} />
				</IconButton>
			</Tooltip>
			{pdfGenerateLoading && (
				<CircularProgress
					color="secondary"
					size={24}
					sx={{
						position: 'absolute',
						top: 8,
						left: 6,
						zIndex: 1,
					}}
				/>
			)}
		</Box>
	);
};

export default DownloadCVButton;
