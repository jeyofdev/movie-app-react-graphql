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
	palette: {
		common: {
			black: '#000',
			white: '#fff',
		},
		grey: {
			50: '#fafafa',
			100: '#f5f5f5',
			200: '#eeeeee',
			300: '#e0e0e0',
			400: '#bdbdbd',
			500: '#9e9e9e',
			600: '#757575',
			700: '#616161',
			800: '#424242',
			900: '#212121',
			A100: '#f5f5f5',
			A200: '#eeeeee',
			A400: '#bdbdbd',
			A700: '#616161',
		},
	},
	typography: {
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		fontSize: 16,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,

		[theme.breakpoints.up('sm')]: {
			fontSize: 16,
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 16,
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: 16,
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: 16,
		},

		h1: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 300,
			fontSize: '6rem',
			lineHeight: 1.167,
			letterSpacing: '-0.01562em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '6rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '6rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '6rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '6rem',
			},
		},
		h2: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 300,
			fontSize: '3.75rem',
			lineHeight: 1.2,
			letterSpacing: '-0.00833em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '3.75rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '3.75rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '3.75rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '3.75rem',
			},
		},
		h3: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",

			fontWeight: 400,
			fontSize: '3rem',
			lineHeight: 1.167,
			letterSpacing: '0em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '3rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '3rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '3rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '3rem',
			},
		},
		h4: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",

			fontWeight: 400,
			fontSize: '2.125rem',
			lineHeight: 1.235,
			letterSpacing: '0.00735em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '2.125rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '2.125rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '2.125rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '2.125rem',
			},
		},
		h5: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: '1.5rem',
			lineHeight: 1.334,
			letterSpacing: '0em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '1.5rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '1.5rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '1.5rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '1.5rem',
			},
		},
		h6: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 500,
			fontSize: '1.25rem',
			lineHeight: 1.6,
			letterSpacing: '0.0075em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '1.25rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '1.25rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '1.25rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '1.25rem',
			},
		},
		subtitle1: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: 1.75,
			letterSpacing: '0.00938em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '1rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '1rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '1rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '1rem',
			},
		},
		subtitle2: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 500,
			fontSize: '0.875rem',
			lineHeight: 1.57,
			letterSpacing: '0.00714em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '0.875rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '0.875rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '0.875rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '0.875rem',
			},
		},
		body1: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: 1.5,
			letterSpacing: '0.00938em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '1rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '1rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '1rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '1rem',
			},
		},
		body2: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: '0.875rem',
			lineHeight: 1.43,
			letterSpacing: '0.01071em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '0.875rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '0.875rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '0.875rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '0.875rem',
			},
		},
		button: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 500,
			fontSize: '0.875rem',
			lineHeight: 1.75,
			letterSpacing: '0.02857em',
			textTransform: 'uppercase',

			[theme.breakpoints.up('sm')]: {
				fontSize: '0.875rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '0.875rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '0.875rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '0.875rem',
			},
		},
		caption: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: '0.75rem',
			lineHeight: 1.66,
			letterSpacing: '0.03333em',

			[theme.breakpoints.up('sm')]: {
				fontSize: '0.75rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '0.75rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '0.75rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '0.75rem',
			},
		},
		overline: {
			fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: '0.75rem',
			lineHeight: 2.66,
			letterSpacing: '0.08333em',
			textTransform: 'uppercase',

			[theme.breakpoints.up('sm')]: {
				fontSize: '0.75rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '0.75rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '0.75rem',
			},
			[theme.breakpoints.up('xl')]: {
				fontSize: '0.75rem',
			},
		},
	},
});

export const lightTheme = createTheme({
	...globalTheme,
	palette: {
		...globalTheme.palette,
		mode: 'dark',
		primary: {
			main: '#ffffff',
			dark: '#222933',
			light: '#222933',
			contrastText: '#222933',
		},
		secondary: {
			main: '#ffffff',
			dark: '#222933',
			light: '#222933',
			contrastText: '#222933',
		},
		error: {
			main: '#d32f2f',
			light: '#ef5350',
			dark: '#c62828',
			contrastText: '#fff',
		},
		warning: {
			main: '#ed6c02',
			light: '#ff9800',
			dark: '#e65100',
			contrastText: '#fff',
		},

		info: {
			main: '#0288d1',
			light: '#03a9f4',
			dark: '#01579b',
			contrastText: '#fff',
		},

		success: {
			main: '#2e7d32',
			light: '#4caf50',
			dark: '#1b5e20',
			contrastText: '#fff',
		},
		background: {
			paper: '#fff',
			default: '#fff',
		},
	},
});

export const darkTheme = createTheme({
	...globalTheme,
	palette: {
		...globalTheme.palette,
		mode: 'light',
		primary: {
			main: '#222933',
			dark: '#ffffff',
			light: '#222933',
			contrastText: '#222933',
		},
		secondary: {
			dark: '#222933',
			main: '#ffffff',
			light: '#222933',
			contrastText: '#222933',
		},

		error: {
			main: '#f44336',
			light: '#e57373',
			dark: '#d32f2f',
			contrastText: '#fff',
		},
		warning: {
			main: '#ffa726',
			light: '#ffb74d',
			dark: '#f57c00',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		info: {
			main: '#29b6f6',
			light: '#4fc3f7',
			dark: '#0288d1',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		success: {
			main: '#66bb6a',
			light: '#81c784',
			dark: '#388e3c',
			contrastText: 'rgba(0, 0, 0, 0.87)',
		},
		background: {
			paper: '#121212',
			default: '#121212',
		},
	},
});
