import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: theme.spacing(4),
	},
	name: {
		gridColumn: {
			xs: '1 / span 12',
			sm: '1 / span 12',
			md: '1 / span 12',
			lg: '2 / span 11',
			xl: '3 / span 10',
		},
		color: theme.palette.primary.main,
		marginBottom: theme.spacing(2),
		display: 'flex',
		justifyContent: 'center',
	},
	// topBox: {
	// 	gridColumn: {
	// 		xl: '3 / span 8',
	// 	},
	// 	display: 'flex',
	// 	gap: theme.spacing(3),
	// },
	poster: {
		gridColumn: {
			xs: '1 / span 12',
			sm: '1 / span 3',
			md: '1 / span 3',
			lg: '2 / span 2',
			xl: '3 / span 2',
		},
		gridRow: {
			xs: '2 / span 3',
			sm: '2 / span 3',
			md: '2 / span 2',
			lg: '2 / span 2',
		},
		height: {
			xs: '300px',
			sm: '250px',
			md: '275px',
			lg: '350px',
			xl: '325px',
		},
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '0 auto',
		borderRadius: theme.spacing(2),
	},
	infoBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(1),
		alignItems: {
			xs: 'center',
			sm: 'flex-start',
		},
	},
	birthdayBox: {
		gridColumn: {
			xs: '1 / span 12',
			sm: '6 / span 7',
			md: '5 / span 4',
			lg: '5 / span 2',
			xl: '5 / span 2',
		},
	},
	deathdayBox: {
		display: {
			xs: 'flex',
			md: 'none',
			lg: 'flex',
		},
		gridColumn: {
			xs: '1 / span 12',
			sm: '6 / span 7',
			lg: 'auto / span 2',
			xl: 'auto / span 2',
		},
	},
	placeBirthBox: {
		gridColumn: {
			xs: '1 / span 12',
			sm: '6 / span 7',
			md: 'auto / span 4',
			lg: 'auto / span 2',
			xl: 'auto / span 2',
		},
	},
	descriptionBox: {
		gridColumn: {
			xs: '2 / span 10',
			sm: '1 / span 12',
			md: '5 / span 8',
			lg: '5 / span 6',
			xl: '5 / span 6',
		},
	},
	viewMoreBtn: {
		backgroundColor: theme.palette.primary.main,
		minWidth: 'auto',
		alignSelf: 'flex-start',

		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	viewMoreTypo: {
		color: theme.palette.primary.contrastText,
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
