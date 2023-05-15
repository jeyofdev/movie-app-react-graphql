import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		gap: '1rem',
		borderRadius: '1rem',
		padding: `${theme.spacing(1.15)} ${theme.spacing(1.2)}`,
		color: theme.palette.primary.main,

		'&.active': {
			backgroundColor: theme.palette.error.main,
			color: theme.palette.primary.light,
		},
	},
	icon: {
		height: '1.5rem',
	},
	label: {
		textTransform: 'normal',
	},
});

export default useStyles;
