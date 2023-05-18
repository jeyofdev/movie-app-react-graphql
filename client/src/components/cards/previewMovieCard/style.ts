import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		alignItems: 'center',
		gap: '1rem',
	},
	imageBox: {
		display: 'flex',
		gridColumn: '1 / span 5',
	},
	image: {
		borderRadius: '1rem',
		width: '100%',
	},
	contentBox: {
		gridColumn: 'auto / span 7',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-betweeen',
		gap: '1rem',
		padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
	},
	titleBox: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: '2rem',
	},
	title: {
		color: theme.palette.primary.main,
	},
	overview: {
		color: theme.palette.primary.main,
	},
	runtime: {
		color: theme.palette.primary.main,
	},
	button: {
		alignSelf: 'flex-start',
	},
	separatorCircle: {
		color: theme.palette.primary.main,
		fontSize: '0.4rem',
		margin: `0 ${theme.spacing(1)}`,
	},
	movieInfosBox: {
		display: 'flex',
		alignItems: 'center',
	},
});

export default useStyles;
