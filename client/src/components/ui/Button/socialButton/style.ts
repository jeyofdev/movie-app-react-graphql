import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	socialBtn: {
		borderColor: theme.palette.grey[300],
		alignSelf: 'center',
		display: 'flex',
		alignItems: 'center',
		minWidth: 300,
		padding: theme.spacing(2),
		borderRadius: '10px',

		'&:hover': {
			borderColor: theme.palette.grey[300],
		},
	},
	icon: {
		fontSize: '1.25rem',
		color: theme.palette.primary.contrastText,
	},
	typo: {
		color: theme.palette.primary.contrastText,
		textTransform: 'none',
	},
});

export default useStyles;
