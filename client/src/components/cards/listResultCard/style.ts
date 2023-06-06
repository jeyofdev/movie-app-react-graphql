import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'relative',
		gridColumn: {
			xs: 'auto / span 12',
			sm: 'auto / span 6',
			md: 'auto / span 4',
			lg: 'auto / span 3',
			xl: 'auto / span 2',
		},
		display: 'flex',
		alignItems: 'flex-start',
		borderRadius: '0.625rem',
		overflow: 'hidden',
		border: `2px solid ${theme.palette.primary.main}`,
		backgroundColor: theme.palette.primary.main,

		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	poster: {
		width: '100%',
		height: {
			xs: '250px',
			sm: '250px',
			md: '250px',
			lg: '260px',
			xl: '260px',
		},
		backgroundSize: 'contain',
	},
	contentBox: {
		margin: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
	},
	title: {
		color: theme.palette.primary.contrastText,
	},
	voteAverageBox: {
		position: 'absolute',
		top: '0.75rem',
		left: '0.75rem',
	},
	voteIcon: {
		fontSize: '0.75rem',
	},
	noImageBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '1rem',
		alignItems: 'center',
		backgroundColor: 'transparent',
	},
	noImageIcon: {
		fontSize: '5rem',
	},
	noImageTypo: {
		color: theme.palette.primary.contrastText,
		fontWeight: 'bold',
	},
});

export default useStyles;
