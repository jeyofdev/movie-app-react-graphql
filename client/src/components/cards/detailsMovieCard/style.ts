import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	poster: {
		width: '100%',
		height: {
			xs: '350px',
		},
		gridColumn: {
			xs: 'auto / span 2',
		},
		backgroundSize: 'contain',
	},
	root: {
		gridColumn: {
			xs: 'auto / span 5',
		},
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
	},
	title: {
		color: theme.palette.primary.main,
	},
	overview: {
		color: theme.palette.primary.main,
	},
});

export default useStyles;
