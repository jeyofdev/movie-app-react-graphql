import { Theme } from '@mui/material';
import { DarkModeEnum } from '../../../types/enums';

const useStyles = (theme: Theme) => ({
	modalBox: (darkMode: DarkModeEnum) => ({
		'& .MuiDialog-paper': {
			position: 'relative',
			backgroundColor:
				darkMode === DarkModeEnum.DARK
					? '#0d0b0b'
					: theme.palette.background.paper,
			boxShadow:
				darkMode === DarkModeEnum.DARK
					? '0px 1px 15px -7px rgba(255,255,255,0.5),0px 2px 1px 3px rgba(255,255,255,0.03),0px 2px 46px 8px rgba(255,255,255,0.05)'
					: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
			backgroundImage: 'none',
			padding: {
				xs: `${theme.spacing(4)} ${theme.spacing(0.5)}`,
				sm: `${theme.spacing(4)} ${theme.spacing(5)}`,
				md: `${theme.spacing(4)} ${theme.spacing(7)}`,
				lg: `${theme.spacing(4)} ${theme.spacing(8)}`,
			},
			margin: {
				xs: `${theme.spacing(4)} ${theme.spacing(1)}`,
				sm: `${theme.spacing(4)} ${theme.spacing(5)}`,
				md: `${theme.spacing(4)} ${theme.spacing(7)}`,
				lg: `${theme.spacing(4)} ${theme.spacing(8)}`,
			},
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			gap: theme.spacing(4),
			borderRadius: '10px',
			width: {
				xs: `calc(100% - (2 * ${theme.spacing(1)}))`,
				sm: 'auto',
			},
			maxHeight: {
				xs: `calc(100% - (2 * ${theme.spacing(2)}))`,
			},
			maxWidth: {
				xs: '335px',
				sm: '768px',
			},
			overflow: 'hidden',
		},
	}),
	iconBox: {
		position: 'absolute',
		top: '0.5rem',
	},
	iconCloseBox: {
		right: '0.75rem',
	},
	iconBackBox: {
		left: '0.75rem',
	},
	iconBtn: {
		minWidth: 'auto',
	},
	icon: {
		fontSize: '1.25rem',
		color: theme.palette.primary.main,
	},
	contentBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: {
			xs: theme.spacing(3),
			sm: theme.spacing(4),
		},
		overflowY: 'scroll',
		padding: `0px ${theme.spacing(1.5)}`,
		maxWidth: {
			xs: 270,
			sm: 'none',
		},
	},
	title: {
		color: theme.palette.primary.main,
		textAlign: 'center',
	},
});

export default useStyles;
