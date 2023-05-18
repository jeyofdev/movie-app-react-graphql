import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	topSectionBox: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		marginBottom: theme.spacing(3),
	},
	sectionTitle: {
		color: theme.palette.primary.main,
	},
	link: {
		color: theme.palette.primary.dark,
		textDecoration: 'none',
	},
});

export default useStyles;
