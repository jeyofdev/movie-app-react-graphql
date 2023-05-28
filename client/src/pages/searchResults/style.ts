import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(3),
	},
	title: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
