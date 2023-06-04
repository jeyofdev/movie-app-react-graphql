import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	label: {
		textTransform: 'normal',
		textAlign: 'center',
		color: theme.palette.primary.main,
	},
	menuItem: {
		backgroundColor: 'transparent',

		'&:hover': {
			background: 'transparent',
		},
	},
});

export default useStyles;
