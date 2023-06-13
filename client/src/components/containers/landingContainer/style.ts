import { Theme } from '@mui/material';
import { DarkModeEnum } from '../../../types/enums';

const useStyles = (theme: Theme) => ({
	root: (backdrop_path: string) => ({
		position: 'relative',
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		flexDirection: 'column',
		backgroundColor: theme.palette.background.paper,
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url(https://image.tmdb.org/t/p/original${backdrop_path})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		padding: 0,
		paddingBottom: '0px',
		width: '100%',
		minHeight: '100vh',

		[theme.breakpoints.up('sm')]: {
			padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
			borderRadius: '1.1rem',
			minHeight: `calc(100vh - (2 * ${theme.spacing(3)}))`,
		},
		[theme.breakpoints.up('md')]: {
			padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
			borderRadius: '1.25rem',
			minHeight: `calc(100vh - (2 * ${theme.spacing(4)}))`,
		},
		[theme.breakpoints.up('lg')]: {
			padding: `${theme.spacing(4.5)} ${theme.spacing(5)}`,
			minHeight: `calc(100vh - (2 * ${theme.spacing(4.5)}))`,
		},
		[theme.breakpoints.up('xl')]: {
			padding: `${theme.spacing(5)} ${theme.spacing(6.5)}`,
			maxWidth: `calc(1920px - (2 * ${theme.spacing(8)}))`,
			minHeight: `calc(100vh - (2 * ${theme.spacing(5)}))`,
		},
	}),
	contentBox: {
		gridColumn: 'auto / span 12',
		overflow: 'hidden',
	},
	divider: (darkMode: DarkModeEnum) => ({
		marginTop: {
			xs: 0,
			sm: theme.spacing(1.5),
		},
		marginBottom: theme.spacing(3),
		borderColor:
			darkMode === DarkModeEnum.DARK
				? theme.palette.grey[800]
				: theme.palette.grey[200],
	}),
	mainContentBox: {
		margin: {
			xs: `0px ${theme.spacing(1)}`,
			sm: '0px',
		},
		height: {
			xs: 'calc(100% - 100px)',
		},
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default useStyles;
