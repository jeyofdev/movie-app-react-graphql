import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'absolute',
		bottom: 0,
		gridColumn: '1 / span 12',
		display: 'flex',
		width: '100%',
		height: '50px',

		[theme.breakpoints.up('sm')]: {
			position: 'relative',
			gridColumn: '1 / span 5',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			gap: '2rem',
			paddingRight: '1rem',
			height: 'auto',
		},
		[theme.breakpoints.up('md')]: {
			gridColumn: '1 / span 3',
		},
		[theme.breakpoints.up('lg')]: {
			gridColumn: '1 / span 2',
		},
		[theme.breakpoints.up('xl')]: {
			gridColumn: '1 / span 1',
		},
	},
	topContentBox: {
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	},
	topIcon: {
		fontSize: '1.75rem',
	},
	topTitle: {
		color: theme.palette.primary.main,
		textTransform: 'uppercase',
	},
	divider: {
		height: '0.5px',
		width: '100%',
		background: theme.palette.primary.dark,
		border: 'none',
	},
});

export default useStyles;
