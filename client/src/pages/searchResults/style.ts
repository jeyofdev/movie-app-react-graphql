import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(3),
	},
	title: {
		width: '100%',
		color: theme.palette.primary.main,
		textAlign: 'center',
	},
	resultsBox: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		gap: theme.spacing(2),
	},
});

export default useStyles;
