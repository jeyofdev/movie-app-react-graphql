import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
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
});

export default useStyles;
