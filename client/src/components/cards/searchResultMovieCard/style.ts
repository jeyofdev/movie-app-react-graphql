import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		gap: theme.spacing(3),
		borderRadius: '0.625rem',
		border: `2px solid ${theme.palette.primary.main}`,
		overflow: 'hidden',
		backgroundColor: theme.palette.primary.main,
		width: {
			xs: '100%',
			lg: `calc(50% - (2 * ${theme.spacing(2)}))`,
			xl: `calc(33.33333% - (2 * ${theme.spacing(2)}))`,
		},
		maxWidth: {
			xs: '300px',
			sm: 'none',
		},
	},
	poster: {
		height: {
			xs: '175px',
		},
	},
	contentBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	title: {
		color: theme.palette.primary.contrastText,
	},
	overview: {
		color: theme.palette.primary.contrastText,
		marginTop: theme.spacing(3),
	},
	releaseDate: {
		color: theme.palette.grey[600],
		marginTop: theme.spacing(1),
	},
});

export default useStyles;
