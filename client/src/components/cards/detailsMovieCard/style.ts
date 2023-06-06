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
			xs: `calc(100% - 85px)`,
			sm: `calc(100% - (58.7px + ${theme.spacing(1.5)} + ${theme.spacing(6)}))`,
		},
	}),
	content: {
		position: 'relative',
		display: 'grid',
		alignItems: 'center',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: theme.spacing(4),
		width: '100%',
	},
	voteBox: {
		display: {
			xs: 'none',
			md: 'flex',
		},
		position: 'absolute',
		top: '0.5rem',
		left: {
			xs: 'calc((100% / 12) + 0.75rem)',
			sm: 'calc((100% / 12) + 0.75rem)',
			md: '0.75rem',
			lg: 'calc((100% / 12) + 0.75rem)',
			xl: 'calc((100% / 6) + 0.75rem)',
		},
		zIndex: 100,
	},
	poster: {
		display: {
			xs: 'none',
			sm: 'none',
			md: 'flex',
		},
		alignSelf: 'flex-start',
		width: '100%',
		height: {
			xs: '350px',
			sm: '350px',
			md: '280px',
			lg: '300px',
			xl: '300px',
		},
		gridColumn: {
			xs: '2 / span 3',
			sm: '1 / span 5',
			md: '1 / span 4',
			lg: '2 / span 3',
			xl: '3 / span 2',
		},
		backgroundSize: 'contain',
		zIndex: 10,
		borderRadius: theme.spacing(2),
	},
	contentBox: {
		gridColumn: {
			xs: 'auto / span 12',
			sm: 'auto / span 12',
			md: 'auto / span 8',
			lg: 'auto / span 7',
			xl: 'auto / span 6',
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
	noImageBox: {
		flexDirection: 'column',
		justifyContent: 'center',
		gap: '1rem',
		alignItems: 'center',
		backgroundColor: theme.palette.primary.main,
	},
});

export default useStyles;
