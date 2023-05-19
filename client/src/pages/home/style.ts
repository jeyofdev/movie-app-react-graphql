import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		backgroundColor: theme.palette.background.default,
		padding: { xs: 0, sm: theme.spacing(3) },
	},
	primaryContentBox: {
		gridColumn: {
			xs: 'auto / span 12',
			sm: 'auto / span 8',
			md: 'auto / span 9',
			lg: 'auto / span 10',
			xl: 'auto / span 11',
		},
	},
	sectionBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'column',
		marginBottom: theme.spacing(4),
	},
	previewBox: {
		marginTop: theme.spacing(1.5),
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
	}),
});

export default useStyles;
