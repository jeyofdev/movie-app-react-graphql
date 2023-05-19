import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	title: {
		position: 'relative',
		color: theme.palette.primary.main,
		zIndex: 100,
	},
});

export default useStyles;
