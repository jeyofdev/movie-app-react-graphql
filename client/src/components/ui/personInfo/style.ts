import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	title: {
		color: theme.palette.primary.main,
	},
	content: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
