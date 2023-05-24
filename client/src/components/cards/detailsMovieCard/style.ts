import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: (backdrop_path: string) => ({
		position: 'relative',
		display: 'grid',
		alignItems: 'flex-end',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: theme.spacing(4),
		backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${backdrop_path})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top center',
		backgroundSize: 'cover',
		borderRadius: '1rem',
		overflow: 'hidden',
		padding: theme.spacing(2),
		height: '100%',
	}),
	poster: {
		width: '100%',
		height: {
			xs: '350px',
		},
		gridColumn: {
			xs: '2 / span 2',
		},
		backgroundSize: 'contain',
		zIndex: 100,
		borderRadius: theme.spacing(2),
	},
	contentBox: {
		gridColumn: {
			xs: 'auto / span 4',
		},
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		zIndex: 100,
	},
	title: {
		color: theme.palette.primary.main,
	},
	overview: {
		color: theme.palette.primary.main,
	},
	swipersBox: {
		gridColumn: {
			xs: 'auto / span 4',
		},
	},
});

export default useStyles;
