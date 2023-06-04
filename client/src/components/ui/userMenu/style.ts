import { Theme } from '@mui/material';
import { DarkModeEnum } from '../../../types/enums';

const useStyles = (theme: Theme) => ({
	root: {},
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
	menu: {
		mt: '45px',

		'& .MuiMenu-paper': {
			backgroundColor: theme.palette.primary.main,
		},
	},
	menuItemsBox: {
		padding: `${theme.spacing(0)} ${theme.spacing(0.5)}`,
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
