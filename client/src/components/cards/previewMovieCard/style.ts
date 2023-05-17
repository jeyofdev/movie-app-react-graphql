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
		padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
	},
	title: {
		color: theme.palette.primary.main,
	},
	overview: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
