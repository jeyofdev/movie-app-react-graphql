import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	socialBtns: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(2),
	},
	inputsBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(2),
	},
	btnSubmit: {
		backgroundColor: theme.palette.primary.contrastText,
		borderRadius: '7px',
		marginTop: theme.spacing(2),
		padding: `${theme.spacing(1.25)} ${theme.spacing(2)}`,
	},
	btnSubmitTypo: {
		color: theme.palette.primary.main,
		textTransform: 'none',
	},
});

export default useStyles;
