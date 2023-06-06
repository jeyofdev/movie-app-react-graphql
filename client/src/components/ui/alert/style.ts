import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.error.light,
	},
	typo: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
