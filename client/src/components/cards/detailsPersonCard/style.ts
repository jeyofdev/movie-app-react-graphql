import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	detailsBox: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	name: {
		color: theme.palette.primary.main,
		textAlign: 'center',
		marginBottom: theme.spacing(4),
	},
	contentBox: {
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: {
			xs: 'column',
			sm: 'row',
		},
		gap: theme.spacing(4),
	},
	poster: {
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
		margin: {
			xs: '0px auto',
			sm: '0px',
		},
		borderRadius: theme.spacing(2),
	},
	noImageBox: {
		flexDirection: 'column',
		width: '100%',
		gap: '1rem',
		backgroundColor: theme.palette.primary.main,
		maxWidth: {
			xs: '200px',
			sm: '250px',
		},
	},
	datasBox: {
		alignSelf: 'center',
		display: 'flex',
		flexDirection: 'column',
		alignItems: {
			xs: 'column',
		},
		gap: theme.spacing(4),
	},
	infosBoxes: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: {
			xs: 'column',
			md: 'row',
		},
		justifyContent: {
			xs: 'flex-start',
			lg: 'space-between',
		},
		gap: theme.spacing(5),
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
	descriptionBox: {
		width: {
			xs: '90%',
			sm: '100%',
		},
		maxWidth: {
			xs: '350px',
			sm: 'none',
		},
		margin: {
			xs: '0px auto',
		},
		marginTop: {
			xs: 0,
			sm: theme.spacing(4),
			md: 0,
		},
	},
	viewMoreBtn: {
		backgroundColor: theme.palette.primary.main,
		minWidth: 'auto',
		alignSelf: {
			xs: 'center',
			sm: 'flex-start',
		},

		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	viewMoreTypo: {
		color: theme.palette.primary.contrastText,
		textTransform: 'none',
	},
});

export default useStyles;
