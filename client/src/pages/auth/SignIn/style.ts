import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	title: {
		color: theme.palette.primary.contrastText,
	},
	btn: {
		color: theme.palette.primary.contrastText,
	},
});

export default useStyles;
