import { Theme } from '@mui/material';
import { DarkModeEnum } from '../../../types/enums';

const useStyles = (theme: Theme) => ({
	formControl: {
		margin: 0,
		backgroundColor: 'transparent',
	},
	select: {
		textAlign: 'center',
		textDecoration: 'none',
		padding: '0',
		border: 'none',
		height: '26px',

		'& .MuiSelect-select': {
			padding: 0,
			paddingRight: '20px !important',
			height: '26px !important',
		},

		'& .MuiSelect-icon': {
			color: theme.palette.primary.main,
			right: '-3px',
		},

		'& .MuiOutlinedInput-notchedOutline': {
			borderStyle: 'none',
		},
	},
	typo: {
		color: theme.palette.primary.main,
	},
	flag: {
		width: 26,
		height: 26,
	},
	menuList: (darkMode: DarkModeEnum) => ({
		backgroundColor:
			darkMode === DarkModeEnum.DARK
				? '#0d0b0b'
				: theme.palette.background.paper,
		backgroundImage: 'none',
		boxShadow:
			darkMode === DarkModeEnum.DARK
				? '0px 1px 15px -7px rgba(255,255,255,0.5),0px 2px 1px 3px rgba(255,255,255,0.03),0px 2px 46px 8px rgba(255,255,255,0.05)'
				: '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',

		'& .MuiMenu-list': {
			paddingTop: theme.spacing(0.5),
			paddingBottom: theme.spacing(0.5),
		},
	}),
	menuItem: (darkMode: DarkModeEnum) => ({
		backgroundColor: 'transparent',

		'&.Mui-selected': {
			backgroundColor:
				darkMode === DarkModeEnum.DARK
					? '#0d0b0b'
					: theme.palette.background.paper,

			'&:hover': {
				backgroundColor:
					darkMode === DarkModeEnum.DARK
						? '#0d0b0b'
						: theme.palette.background.paper,
			},

			'&:focus-visible': {
				backgroundColor:
					darkMode === DarkModeEnum.DARK
						? '#0d0b0b'
						: theme.palette.background.paper,
			},
		},
	}),
});

export default useStyles;
