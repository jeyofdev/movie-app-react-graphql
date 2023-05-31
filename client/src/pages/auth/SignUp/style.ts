import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	title: {
		color: theme.palette.primary.contrastText,
	},
	loginBtn: {
		color: theme.palette.primary.contrastText,
	},
	logout: {
		color: theme.palette.primary.contrastText,
	},
});

export default useStyles;
