import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		gridColumn: '1 / 4',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		gap: '2rem',
		paddingRight: '1rem',
	},
	topContentBox: {
		display: 'flex',
		alignItems: 'center',
		gap: '1rem',
	},
	topTitle: {
		color: theme.palette.primary.main,
		textTransform: 'uppercase',
	},
	divider: {
		height: '0.5px',
		width: '100%',
		background: theme.palette.primary.dark,
		border: 'none',
	},
});

export default useStyles;
