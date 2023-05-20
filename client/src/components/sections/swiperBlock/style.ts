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
		minHeight: {
			xs: '450px',
			sm: '425px',
			md: '400px',
		},
		backgroundColor: 'transparent',
		backgroundImage: `url(https://image.tmdb.org/t/p/original/${backgroundImage})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'top center',
		backgroundSize: 'cover',
		borderRadius: '1rem',
		padding: {
			xs: `${theme.spacing(3.5)} ${theme.spacing(3)}`,
			sm: `${theme.spacing(4.5)} ${theme.spacing(4)}`,
			md: `${theme.spacing(5.5)} ${theme.spacing(4)}`,
			lg: `${theme.spacing(8)} ${theme.spacing(6)}`,
		},
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
		borderRadius: '1rem',
	},
});

export default useStyles;
