import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: '0.25rem',
		width: '100%',

		[theme.breakpoints.up('sm')]: {
			flexDirection: 'column',
		},
	},
	menuItemsBlockTitle: {
		color: theme.palette.primary.dark,
	},
});

export default useStyles;
