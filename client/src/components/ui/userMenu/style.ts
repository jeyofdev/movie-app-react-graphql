import { Theme } from '@mui/material';
import { DarkModeEnum } from '../../../types/enums';

const useStyles = (theme: Theme) => ({
	userIconBtn: {
		background: theme.palette.primary.main,
		borderRadius: '100%',
		width: '26px',
		height: '26px',
		minWidth: 'auto',

		'&:hover': {
			background: theme.palette.primary.main,
		},
	},
	topIcon: {
		fontSize: '1.05rem',
	},
	menu: (darkMode: DarkModeEnum) => ({
		mt: '45px',

		'& .MuiMenu-paper': {
			backgroundColor:
				darkMode === DarkModeEnum.DARK
					? '#0d0b0b'
					: theme.palette.background.paper,
			backgroundImage: 'none',
			boxShadow:
				darkMode === DarkModeEnum.DARK
					? '0px 1px 15px -7px rgba(255,255,255,0.5),0px 2px 1px 3px rgba(255,255,255,0.03),0px 2px 46px 8px rgba(255,255,255,0.05)'
					: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
		},
	}),
	menuItemsBox: {
		padding: `${theme.spacing(0)} ${theme.spacing(0.5)}`,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	divider: (darkMode: DarkModeEnum) => ({
		height: '0.5px',
		width: '100%',
		background:
			darkMode === DarkModeEnum.DARK
				? theme.palette.grey[300]
				: theme.palette.grey[700],
		border: 'none',
	}),
});

export default useStyles;
