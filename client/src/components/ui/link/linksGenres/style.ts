import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'flex',
	},
	genreButton: {
		padding: 0,
		minWidth: 0,
	},
	span: { color: theme.palette.primary.main, marginTop: '2px' },
});

export default useStyles;
