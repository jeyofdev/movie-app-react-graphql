import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		borderRadius: '1rem',
		overflow: 'hidden',
	},
	poster: {
		width: '100%',
		height: 234,
		backgroundSize: 'contain',
	},
	title: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
