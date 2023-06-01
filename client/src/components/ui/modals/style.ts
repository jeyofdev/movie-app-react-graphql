import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	modalBox: {
		'& .MuiDialog-paper': {
			position: 'relative',
			backgroundColor: theme.palette.background.default,
			padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
			display: 'flex',
			justifyContent: 'center',
			gap: theme.spacing(4),
			borderRadius: '10px',
		},
	},
	title: {
		color: theme.palette.primary.contrastText,
		textAlign: 'center',
	},
	closeIconBox: {
		position: 'absolute',
		top: '0.5rem',
		right: '0.75rem',
	},
	closeBtn: {
		minWidth: 'auto',
	},
	closeIcon: {
		fontSize: '1.25rem',
		color: theme.palette.primary.contrastText,
	},
});

export default useStyles;
