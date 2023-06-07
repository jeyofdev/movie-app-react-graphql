import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	noImageTypo: {
		color: theme.palette.primary.contrastText,
		fontWeight: 'bold',
	},
	noImageIcon: {
		fontSize: '5rem',
	},
});

export default useStyles;
