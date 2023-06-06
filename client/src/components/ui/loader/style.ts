import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	loaderBox: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(1),
	},
	loader: {
		color: theme.palette.primary.main,
	},
	typo: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
