import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	name: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
