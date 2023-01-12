import { Theme as MaterialUITheme } from '@mui/material';
import { createTheme, PaletteOptions } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { dark, light } from './modes';

// Re-declare the emotion theme to have the properties of the MaterialUiTheme
declare module '@emotion/react' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface Theme extends MaterialUITheme {}
}

export type ThemeTypes = 'light' | 'dark';

export type createMuiThemeProps = {
	mode: ThemeTypes;
};

type PaletteOptionsType = {
	light: PaletteOptions;
	dark: PaletteOptions;
};

const typography: TypographyOptions = {
	fontFamily: [
		'-apple-system',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'Roboto',
		'Helvetica',
		'Arial',
		'sans-serif',
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(','),
	caption: {
		fontWeight: 600,
		fontSize: '12px',
		lineHeight: '13px',
		textTransform: 'uppercase',
	},
};

const palette: PaletteOptionsType = { light, dark };

const createMuiTheme = ({ mode }: createMuiThemeProps) =>
	createTheme({
		palette: palette[mode],
		typography,
		components: {
			MuiTab: {
				styleOverrides: {
					root: {
						textTransform: 'capitalize',
					},
				},
			},
			MuiList: {
				styleOverrides: {
					root: {
						'& .MuiListItemButton-root.Mui-selected': {
							backgroundColor: 'rgba(144, 202, 249, 0.16)',
						},
					},
				},
			},
			MuiListItem: {
				styleOverrides: {
					root: ({ theme }) => ({
						'& a': {
							color: theme.palette.secondary.main,
							textDecoration: 'none',
						},
						'& a:hover': {
							color: theme.palette.azure.main,
						},
					}),
				},
			},

			MuiAppBar: {
				styleOverrides: {
					root: ({ ownerState, theme }) => ({
						...(ownerState.color === 'default' && {
							backgroundColor: theme.palette.mode === 'light' ? '#24292f' : '#161b22',
						}),
					}),
				},
			},
			MuiCard: {
				styleOverrides: {
					root: ({ theme }) => ({
						border:
							theme.palette.mode === 'light'
								? '1px solid rgba(0, 0, 0, 0.12)'
								: '1px solid rgba(240, 246, 252, 0.1)',
					}),
				},
			},
			MuiBadge: {
				styleOverrides: {
					root: ({ ownerState }) => ({
						...(ownerState.variant === 'dot' &&
							ownerState.color === 'default' && {
								'& .MuiBadge-dot': {
									backgroundImage: 'linear-gradient(#54a3ff, #006eed)',
								},
							}),
					}),
				},
			},
			MuiButton: {
				styleOverrides: {
					outlined: ({ theme }) => ({
						borderRadius: '6px',
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.mode === 'light' ? '#24292f' : '#c9d1d9',
						'&:hover': {
							backgroundColor: theme.palette.mode === 'light' ? '#f3f4f6' : '#30363d',
							borderColor:
								theme.palette.mode === 'light' ? 'rgba(27,31,36,0.15)' : '#8b949e',
						},
					}),
				},
			},
		},
	});

export default createMuiTheme;
