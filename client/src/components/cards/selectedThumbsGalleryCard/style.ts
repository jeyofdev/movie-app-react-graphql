import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: `calc(300px - ${theme.spacing(8)})`,
	},
	title: {
		position: 'relative',
		color: theme.palette.primary.main,
		zIndex: 100,
		marginBottom: theme.spacing(1.25),
	},
	overview: {
		position: 'relative',
		color: theme.palette.primary.main,
		zIndex: 100,
		marginTop: theme.spacing(1.25),
		maxWidth: '65%',
	},
	button: {
		position: 'relative',
		color: theme.palette.primary.main,
		zIndex: 100,
	},
});

export default useStyles;
