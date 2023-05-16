import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundColor: theme.palette.background.default,
		padding: 0,

		[theme.breakpoints.up('sm')]: {
			padding: `${theme.spacing(3)}`,
		},
	},
	primaryContentBox: {
		gridColumn: 'auto / span 9',
	},
	sectionBox: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	sectionTitle: {
		color: theme.palette.primary.main,
	},
	link: {
		color: theme.palette.primary.dark,
		textDecoration: 'none',
	},
});

export default useStyles;
