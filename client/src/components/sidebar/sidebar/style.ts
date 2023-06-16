import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		zIndex: 100,
		position: 'absolute',
		top: 0,

		[theme.breakpoints.up('sm')]: {
			position: 'relative',
			gridColumn: '1 / span 4',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-start',
			gap: '2rem',
			paddingRight: theme.spacing(4),
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
	divider: {
		height: '0.5px',
		width: '100%',
		background: theme.palette.primary.dark,
		border: 'none',
	},
	showAllGenresBtn: {
		gap: '0.75rem',
		background: theme.palette.error.main,
		borderRadius: '1rem',
		width: 'fit-content',
		color: theme.palette.common.white,

		'&:hover': {
			background: theme.palette.error.main,
			color: theme.palette.common.white,
		},
	},
	showAllGenresIcon: {
		fontSize: '1rem',
		color: theme.palette.common.white,
	},
	showAllGenresTypo: {
		color: theme.palette.common.white,
	},
});

export default useStyles;
