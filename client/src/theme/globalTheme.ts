import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
});

// A custom theme for this app
const globalTheme = createTheme({
	...theme,
	typography: {
		h1: {
			fontSize: '1rem',
			[theme.breakpoints.up('sm')]: {
				fontSize: '1.15rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '1.25rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '2.35rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '1.5rem',
			},
		},
	},
	palette: {
		info: {
			main: 'rgb(219, 234, 254)',
		},
	},
});

export default globalTheme;
