import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	topContentBox: (landing: boolean) => ({
		gridColumn: landing ? '1 / span 6' : 'none',
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
		marginTop: landing ? '0px' : theme.spacing(2),
		zIndex: 1000,
	}),
	topIcon: {
		fontSize: '1.75rem',
		cursor: 'pointer',
	},
	topTitle: {
		color: theme.palette.primary.main,
		textTransform: 'uppercase',
		cursor: 'pointer',
	},
});

export default useStyles;
