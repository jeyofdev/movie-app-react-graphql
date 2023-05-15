import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		gridColumn: '1 / 4',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		gap: '2rem',
		paddingRight: '1rem',
	},
	topContentBox: {
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	},
	topTitle: {
		color: theme.palette.primary.main,
		textTransform: 'uppercase',
	},
	menuItemsBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.5rem',
	},
	menuItemsBlockTitle: {
		color: theme.palette.primary.dark,
	},
});

export default useStyles;
