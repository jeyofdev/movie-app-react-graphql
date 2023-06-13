import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		width: '100%',
	},
	imagesBox: {
		display: 'flex',
		position: 'relative',
	},
	cardBox: {
		position: 'absolute',
	},
	cardBoxOne: {
		left: '50%',
		transform: {
			xs: 'rotate(-18deg) translate(-124px, -25px)',
			sm: 'rotate(-18deg) translate(-190px, -37px)',
			md: 'rotate(-18deg) translate(-190px, -40px)',
			lg: 'rotate(-18deg) translate(-250px, -50px)',
		},
		zIndex: 10,
	},
	cardBoxTwo: {
		left: '50%',
		transform: 'rotate(0deg) translateX(-50%)',
		zIndex: 1000,
	},
	cardBoxThree: {
		left: '50%',
		transform: {
			xs: 'rotate(18deg) translate(8px, 13px)',
			sm: 'rotate(18deg) translate(40px, 20px)',
			md: 'rotate(18deg) translate(25px, 13px)',
			lg: 'rotate(18deg) translate(16px, 23px)',
		},
		zIndex: 10,
	},
	btnsBox: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		gap: theme.spacing(2),
		// background: 'red',
		zIndex: 1001,
		marginTop: {
			xs: '230px',
			sm: '330px',
			md: '330px',
			lg: '450px',
			xl: '450px',
		},
	},
	btn: {
		borderRadius: '100px',
		padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
		border: `2px solid ${theme.palette.primary.main}`,

		'&:hover': {
			border: `2px solid ${theme.palette.primary.main}`,
		},
	},
	btnContained: {
		backgroundColor: theme.palette.primary.main,

		'&:hover': {
			backgroundColor: theme.palette.primary.main,
		},
	},
});

export default useStyles;
