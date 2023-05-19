import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'relative',
		zIndex: 100,
	},
	movieInfosBox: {
		display: 'flex',
		alignItems: 'center',
	},
	runtime: {
		color: theme.palette.primary.main,
	},
	separatorCircle: {
		color: theme.palette.primary.main,
		fontSize: '0.4rem',
		margin: `0 ${theme.spacing(1)}`,
	},
});

export default useStyles;
