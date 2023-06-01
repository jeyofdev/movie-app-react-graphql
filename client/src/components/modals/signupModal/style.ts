import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	socialBtns: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(2),
	},
});

export default useStyles;
