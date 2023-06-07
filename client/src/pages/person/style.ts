import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: `0px ${theme.spacing(5)}`,
	},
	// topBox: {
	// 	gridColumn: {
	// 		xl: '3 / span 8',
	// 	},
	// 	display: 'flex',
	// 	gap: theme.spacing(3),
	// },
	listMoviesBox: {
		gridColumn: {
			xs: '1 / span 12',
			sm: '1 / span 12',
			md: '1 / span 12',
			lg: '2 / span 9',
			xl: '4 / span 7',
		},
		marginTop: theme.spacing(4),
	},
	listMoviesTitle: {
		color: theme.palette.primary.main,
		marginBottom: theme.spacing(4),
		textAlign: 'center',
	},
	cardsMovies: {
		gridColumn: {
			xs: 'auto / span 12',
			sm: 'auto / span 6',
			md: 'auto / span 4',
			lg: 'auto / span 3',
			// xl: 'auto / span 2',
		},
	},
});

export default useStyles;
