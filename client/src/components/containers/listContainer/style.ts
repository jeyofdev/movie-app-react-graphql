import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	primaryContentBox: {
		gridColumn: {
			xs: 'auto / span 12',
			sm: 'auto / span 8',
			md: 'auto / span 9',
			lg: 'auto / span 10',
			xl: 'auto / span 11',
		},
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	darkMode: {
		alignSelf: 'flex-start',
	},
	cards: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: {
			xs: `${theme.spacing(4)} ${theme.spacing(2)}`,
			sm: `${theme.spacing(4)} ${theme.spacing(3)}`,
			md: `${theme.spacing(4)} ${theme.spacing(3)}`,
			lg: `${theme.spacing(4)} ${theme.spacing(3)}`,
			xl: `${theme.spacing(5)} ${theme.spacing(4)}`,
		},
		maxWidth: {
			xs: '200px',
			sm: '400px',
			md: '600px',
			lg: '850px',
			xl: '1350px',
		},
		justifyContent: 'center',
	},
	title: {
		marginBottom: theme.spacing(5),
		color: theme.palette.primary.main,
	},
});

export default useStyles;
