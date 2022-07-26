import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { setTimeout } from 'timers';

const DownloadCVButton = () => {
	const [showTooltip, setShowTooltip] = React.useState<boolean>(false);

	const handleClick = () => {
		setShowTooltip(false);

		setTimeout(() => {
			// TODO: Add generate CV logic
		}, 500);
	};

	return (
		<Box sx={{ display: { xs: 'none', md: 'inline-block' } }}>
			<Tooltip
				title="Download my CV"
				open={showTooltip}
				disableHoverListener
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				<IconButton onClick={handleClick} aria-label="generate-pdf" sx={{ color: 'white' }}>
					<SaveAltIcon sx={{ fontSize: 20 }} />
				</IconButton>
			</Tooltip>
		</Box>
	);
};

export default DownloadCVButton;
