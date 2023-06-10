import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	socialBtns: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(2),
	},
	dividerBox: {
		display: 'flex',
		justifyContent: 'center',
	},
	divider: {
		maxWidth: '200px',
		width: '100%',
	},
	dividerContent: {
		'&:before': {
			borderColor: theme.palette.primary.main,
		},
		'&:after': {
			borderColor: theme.palette.primary.main,
		},
	},
	dividerTypo: {
		color: theme.palette.primary.main,
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
	forgotTypo: {
		color: theme.palette.primary.main,
		textTransform: 'none',
	},
	redirectBox: {
		display: 'flex',
		justifyContent: 'center',
	},
	btnRedirect: {
		textTransform: 'none',
		color: theme.palette.primary.main,
		fontWeight: 'bold',

		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	alertDanger: {
		backgroundColor: theme.palette.error.light,
		color: theme.palette.error.main,
	},
	alertSuccess: {
		backgroundColor: theme.palette.success.light,
		color: theme.palette.success.dark,
	},
	alertIcon: {
		fontSize: '1.15rem',
	},
});

export default useStyles;
