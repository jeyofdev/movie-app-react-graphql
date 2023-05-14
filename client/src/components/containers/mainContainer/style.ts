import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: theme.palette.background.paper,
		padding: `${theme.spacing(2.5)} ${theme.spacing(2.5)}`,
		borderRadius: '0.825rem',
		width: '100%',

		[theme.breakpoints.up('sm')]: {
			padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
			margin: `0px ${theme.spacing(2.5)}`,
			borderRadius: '1.1rem',
		},
		[theme.breakpoints.up('md')]: {
			padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
			borderRadius: '1.25rem',
		},
		[theme.breakpoints.up('lg')]: {
			padding: `${theme.spacing(4.5)} ${theme.spacing(6)}`,
		},
		[theme.breakpoints.up('xl')]: {
			padding: `${theme.spacing(6)} ${theme.spacing(8)}`,
			maxWidth: `calc(1920px - (2 * ${theme.spacing(8)}))`,
		},
	},
});

export default useStyles;
