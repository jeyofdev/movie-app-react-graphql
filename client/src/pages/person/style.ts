import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	name: {
		color: theme.palette.primary.main,
		marginBottom: theme.spacing(2),
	},
	topBox: {
		display: 'flex',
		gap: theme.spacing(3),
	},
	poster: {
		height: {
			xs: '350px',
		},
		gridColumn: {
			xs: '2 / span 3',
		},
		borderRadius: theme.spacing(2),
	},
	personalInfosBox: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		gap: theme.spacing(3),
	},
	infoBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(1),
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
});

export default useStyles;
