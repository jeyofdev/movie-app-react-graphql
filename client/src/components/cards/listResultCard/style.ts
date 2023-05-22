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
		borderRadius: '0.625rem',
		overflow: 'hidden',
		border: `2px solid ${theme.palette.primary.main}`,
		backgroundColor: theme.palette.primary.main,
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
});

export default useStyles;
