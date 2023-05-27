import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		padding: theme.spacing(1),
		paddingTop: 0,
	},
	darkModeBtn: {
		background: theme.palette.primary.main,
		borderRadius: '100%',
		width: '26px',
		height: '26px',
		minWidth: 'auto',

		'&:hover': {
			background: theme.palette.primary.main,
		},
	},
	darkModeIcon: {
		fontSize: '1.1rem',
	},
});

export default useStyles;
