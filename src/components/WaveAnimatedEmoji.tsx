import { css, keyframes } from '@emotion/react';
interface AnimatedWaveProps {
	children: React.ReactNode;
}

const waveEffect = keyframes`
    0% { transform: rotate(0.0deg); }
    15 { transform: rotate(14.0deg); }
    30% { transform: rotate(-8.0deg); }
    40% { transform: rotate(14.0deg); }
    50% { transform: rotate(-4.0deg); }
    60% { transform: rotate(10.0deg); }
    70% { transform: rotate(0.0deg); }
    100% { transform: rotate(0.0deg); }
`;

const WaveAnimatedEmoji = ({ children }: AnimatedWaveProps) => {
	return (
		<span
			css={(theme) => css`
				animation-name: ${waveEffect};
				animation-duration: 2.5s;
				animation-iteration-count: infinite;
				transform-origin: 70% 70%;
				display: inline-block;
				padding-left: ${theme.spacing(1)};
				padding-right: ${theme.spacing(1)};
			`}
		>
			{children}
		</span>
	);
};

export default WaveAnimatedEmoji;
