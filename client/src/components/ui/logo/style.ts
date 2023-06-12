import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	topContentBox: {
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
		marginTop: theme.spacing(2),
	},
	topIcon: {
		fontSize: '1.75rem',
	},
	topTitle: {
		color: theme.palette.primary.main,
		textTransform: 'uppercase',
	},
});

export default useStyles;
