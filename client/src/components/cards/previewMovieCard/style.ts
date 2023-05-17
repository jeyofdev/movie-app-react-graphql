import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		gap: '2rem',
	},
	image: {
		borderRadius: '1rem',
	},
	contentBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-betweeen',
		gap: '1rem',
		padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
	},
	title: {
		color: theme.palette.primary.main,
	},
	overview: {
		color: theme.palette.primary.main,
	},
	button: {
		alignSelf: 'flex-start',
	},
	genresBox: {
		display: 'flex',
	},
	genreButton: {
		padding: 0,
		minWidth: 0,
	},
});

export default useStyles;
