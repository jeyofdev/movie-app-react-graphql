import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundColor: theme.palette.background.default,
		padding: { xs: 0, sm: theme.spacing(3) },
	},
	primaryContentBox: {
		gridColumn: {
			xs: 'auto / span 12',
			sm: 'auto / span 8',
			md: 'auto / span 9',
			lg: 'auto / span 10',
			xl: 'auto / span 11',
		},
	},
	title: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
