import '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		azure: Palette['primary'];
	}

	interface PaletteOptions {
		azure?: PaletteOptions['primary'];
	}
}
