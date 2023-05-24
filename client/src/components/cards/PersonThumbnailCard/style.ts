import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		borderRadius: '100%',
		overflow: 'hidden',
	},
	poster: {
		width: '60px',
		height: '60px',
		backgroundSize: 'contain',
	},
	title: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
