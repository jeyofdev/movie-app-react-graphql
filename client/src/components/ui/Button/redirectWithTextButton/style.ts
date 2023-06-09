import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	content: {
		color: theme.palette.primary.main,
		textAlign: 'center',
	},
	btnRedirect: {
		textTransform: 'none',
		color: theme.palette.primary.main,
		fontWeight: 'bold',

		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
});

export default useStyles;
