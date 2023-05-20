import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'relative',
		gridColumn: 'auto / span 3',
		borderRadius: '0.625rem',
		overflow: 'hidden',
		border: `2px solid ${theme.palette.primary.main}`,
		backgroundColor: theme.palette.primary.main,
	},
	poster: {
		width: '100%',
		height: 280,
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
		background: theme.palette.common.black,
		borderRadius: '1rem',
		padding: `${theme.spacing(0.35)} ${theme.spacing(0.9)}`,
	},
	voteIcon: {
		fontSize: '0.75rem',
		margin: '0',
		marginRight: theme.spacing(1),
	},
	typeIcon: {
		color: theme.palette.common.white,
	},
});

export default useStyles;
