import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		position: 'relative',
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		flexDirection: 'column',
		backgroundColor: theme.palette.background.paper,
		padding: 0,
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
	},
});

export default useStyles;
