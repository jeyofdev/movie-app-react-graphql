import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	noImageTypo: {
		color: theme.palette.primary.contrastText,
		fontWeight: 'bold',
		lineHeight: 1.2,
	},
	noImageIcon: {
		fontSize: '5rem',
	},
});

export default useStyles;
