import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	topSectionBox: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	sectionTitle: {
		color: theme.palette.primary.main,
	},
	link: {
		color: theme.palette.primary.dark,
		textDecoration: 'none',
	},
	swiperContentBox: (backgroundImage: string) => ({
		position: 'relative',
		width: '100%',
		minHeight: '300px',
		backgroundColor: 'transparent',
		backgroundImage: `url(https://image.tmdb.org/t/p/original/${backgroundImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top center',
		backgroundSize: 'cover',
		borderRadius: '1rem',
		padding: `${theme.spacing(8)} ${theme.spacing(5)}`,
	}),
	mask: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: theme.palette.common.black,
		opacity: 0.5,
		zIndex: 1,
	},
});

export default useStyles;
