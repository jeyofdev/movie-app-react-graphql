import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'relative',
		backgroundColor: theme.palette.primary.main,
		borderRadius: '100%',
		width: '30px',
		minWidth: 'auto',
		height: '30px',
		zIndex: 10000,

		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	icon: {
		fontSize: '0.9rem',
		color: theme.palette.primary.contrastText,
	},
});

export default useStyles;
