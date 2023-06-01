import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	formControl: {
		width: '100%',
	},
	inputText: {
		background: theme.palette.primary.main,
		borderRadius: '7px',
		padding: theme.spacing(0.5),
		border: `1px solid ${theme.palette.grey[300]}`,
		color: theme.palette.primary.contrastText,
	},
	inputIcon: {
		color: theme.palette.grey[300],
		fontSize: '1.25rem',
	},
	labelTypo: {
		color: theme.palette.primary.contrastText,
	},
});

export default useStyles;
