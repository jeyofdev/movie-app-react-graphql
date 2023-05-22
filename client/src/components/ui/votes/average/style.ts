import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		padding: `${theme.spacing(0.35)} ${theme.spacing(1)}`,
	},
	boxWithBackground: {
		background: theme.palette.common.black,
		borderRadius: '1rem',
	},
	voteStar: {
		fontSize: '0.9rem',
		marginRight: theme.spacing(1),
		color: 'yellow',
	},
	vote: {
		marginTop: '0.2rem',
		lineHeight: 1,
		color: theme.palette.common.white,
	},
});

export default useStyles;
