import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	modalBox: {
		'& .MuiDialog-paper': {
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
});

export default useStyles;
