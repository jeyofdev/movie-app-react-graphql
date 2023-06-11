import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: `0px ${theme.spacing(5)}`,
		maxWidth: '900px',
		width: '100%',
		margin: '0px auto',
	},
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
