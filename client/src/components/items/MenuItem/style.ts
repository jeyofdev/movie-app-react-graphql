import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			background: 'transparent',
			gap: '1rem',

			'&.active': {
				opacity: 0.2,
			},

			'&:hover': {
				backgroundColor: 'transparent',
			},
		},

		[theme.breakpoints.up('sm')]: {
			display: 'flex',
			gap: '0.6rem',
			padding: `${theme.spacing(1.15)} ${theme.spacing(1)}`,
			color: theme.palette.primary.main,
			justifyContent: 'flex-start',
			alignItems: 'center',
			borderRadius: '1rem',

			'&.active': {
				opacity: 1,
				backgroundColor: theme.palette.error.main,
				color: theme.palette.primary.light,
			},
		},
	},
	icon: {
		height: '1.15rem',
		minWidth: '1.5rem',
	},
	iconMobile: {
		height: '1.5rem',
		minWidth: '2rem',
	},
	label: {
		textTransform: 'normal',
	},
});

export default useStyles;
