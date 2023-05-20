import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	zIndex: {
		position: 'relative',
		zIndex: 100,
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		gap: '1rem',
	},
	contentBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	},
	contentTop: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	title: {
		color: theme.palette.common.white,
	},
	overview: {
		color: theme.palette.common.white,
		maxWidth: {
			sm: '100%',
			md: '80%',
		},
	},
	button: {
		color: theme.palette.common.black,
		backgroundColor: theme.palette.common.white,
		border: 'none',
		boxShadow: 'none',

		'&:hover': {
			backgroundColor: theme.palette.common.white,
		},
	},
	voteAverage: {
		color: theme.palette.common.white,
	},
});

export default useStyles;
