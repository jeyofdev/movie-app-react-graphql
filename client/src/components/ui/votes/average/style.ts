import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
	voteStar: {
		fontSize: '1rem',
		margin: `0 ${theme.spacing(1)}`,
		color: 'yellow',
	},
	vote: {
		color: theme.palette.primary.main,
		marginTop: '0.2rem',
	},
});

export default useStyles;