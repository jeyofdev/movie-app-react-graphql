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
export const globalTheme = createTheme({
	...theme,
	typography: {
		h1: {
			fontSize: '2rem',
			// [theme.breakpoints.up('sm')]: {
			// 	fontSize: '2.5rem',
			// },
			// [theme.breakpoints.up('md')]: {
			// 	fontSize: '2.5rem',
			// },
			// [theme.breakpoints.up('lg')]: {
			// 	fontSize: '2.5rem',
			// },
			// [theme.breakpoints.up('xl')]: {
			// 	fontSize: '2.5rem',
			// },
		},
	},
});

export const lightTheme = createTheme({
	...globalTheme,
	palette: {
		mode: 'dark',
		primary: {
			main: '#ffffff',
			dark: '#222933',
		},
	},
});

export const darkTheme = createTheme({
	...globalTheme,
	palette: {
		mode: 'light',
		primary: {
			main: '#222933',
			dark: '#ffffff',
		},
	},
});
