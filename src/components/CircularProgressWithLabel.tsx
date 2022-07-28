import { css } from '@emotion/react';
import { Box, Typography } from '@mui/material';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { styled } from '@mui/system';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number; text: string }) {
	return (
		<Box
			css={css`
				position: relative;
				display: inline-flex;
			`}
		>
			<CircularProgress variant="determinate" {...props} />
			<TextContainer>
				<Typography variant="body1" component="div">
					{props.text}
				</Typography>
			</TextContainer>
		</Box>
	);
}

const TextContainer = styled(Box)({
	top: 0,
	left: 0,
	bottom: 0,
	right: 0,
	position: 'absolute',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export default CircularProgressWithLabel;
