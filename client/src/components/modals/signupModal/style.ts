import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {},
	socialBtns: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(2),
	},
	form: {
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
		backgroundColor: theme.palette.primary.main,
		borderRadius: '7px',
		marginTop: theme.spacing(2),
		padding: `${theme.spacing(1.25)} ${theme.spacing(2)}`,
	},
	btnSubmitTypo: {
		color: theme.palette.primary.contrastText,
		textTransform: 'none',
	},
	redirectBox: {
		display: 'flex',
		justifyContent: 'center',
	},
	btnRedirect: {
		textTransform: 'none',
		color: theme.palette.primary.contrastText,
		fontWeight: 'bold',

		'&:bold': {
			backgroundColor: 'transparent',
		},
	},
});

export default useStyles;
