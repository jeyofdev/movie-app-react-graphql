import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		alignItems: 'center',
		gap: '1rem',
	},
	imageBox: {
		display: {
			xs: 'none',
			lg: 'flex',
		},
		gridColumn: {
			lg: '2 / span 4',
			xl: '3 / span 4',
		},
	},
	image: {
		borderRadius: '1rem',
		width: '100%',
	},
	contentBox: {
		gridColumn: {
			xs: '1 / span 12',
			sm: '1 / span 12',
			md: '2 / span 10',
			lg: 'auto / span 6',
			xl: 'auto / span 4',
		},
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
	button: {
		alignSelf: 'flex-start',
	},
});

export default useStyles;
