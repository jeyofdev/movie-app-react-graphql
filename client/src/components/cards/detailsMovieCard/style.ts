import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: (backdrop_path: string) => ({
		display: 'flex',
		alignItems: 'flex-end',
		backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${backdrop_path})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top center',
		backgroundSize: 'cover',
		borderRadius: '1rem',
		overflow: 'hidden',
		padding: theme.spacing(2),
		height: {
			xs: `calc(100% - 58.7px)`,
			sm: `calc(100% - (58.7px + ${theme.spacing(1.5)} + ${theme.spacing(6)}))`,
		},
	}),
	content: {
		position: 'relative',
		display: 'grid',
		alignItems: 'center',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: theme.spacing(4),
	},
	voteBox: {
		position: 'absolute',
		top: '0.5rem',
		left: 'calc((100% / 12) + 0.75rem)',
		zIndex: 100,
	},
	poster: {
		width: '100%',
		height: {
			xs: '350px',
			md: '350px',
		},
		gridColumn: {
			xs: '2 / span 3',
		},
		backgroundSize: 'contain',
		zIndex: 10,
		borderRadius: theme.spacing(2),
	},
	contentBox: {
		gridColumn: {
			xs: 'auto / span 7',
		},
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		zIndex: 100,
	},
	title: {
		color: theme.palette.common.white,
		gridColumn: '1 / span 12',
	},
	overview: {
		color: theme.palette.common.white,
	},
});

export default useStyles;
