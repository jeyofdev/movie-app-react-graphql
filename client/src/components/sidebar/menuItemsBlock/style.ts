import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.25rem',
	},
	menuItemsBlockTitle: {
		color: theme.palette.primary.dark,
	},
});

export default useStyles;
