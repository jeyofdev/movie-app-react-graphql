import { Theme } from '@mui/material';
import { DarkModeEnum } from '../../types/enums';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		gap: theme.spacing(3),
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: theme.spacing(1),
		minHeight: '58.7px',
	},
	searchBox: {
		gridColumn: {
			xs: '1 / span 8',
			sm: '1 / span 8',
			md: '1 / span 9',
			lg: '1 / span 6',
			xl: '1 / span 5',
		},
	},
	LinksBox: {
		gridColumn: {
			xs: '10 / span 4',
			sm: '9 / span 4',
			md: '11 / span 2',
			lg: '11 / span 2',
			xl: '12 / span 1',
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		gap: theme.spacing(1),
	},
	darkModeBtn: {
		background: theme.palette.primary.main,
		borderRadius: '100%',
		width: '26px',
		height: '26px',
		minWidth: 'auto',

		'&:hover': {
			background: theme.palette.primary.main,
		},
	},
	icon: {
		fontSize: '1.1rem',
	},
	searchIcon: {
		fontSize: '1rem',
	},
	searchFormControl: (darkMode: DarkModeEnum) => ({
		width: '100%',
		borderRadius: '10px',
		backgroundColor:
			darkMode === DarkModeEnum.DARK
				? theme.palette.primary.main
				: theme.palette.grey[100],
	}),
	searchInput: {
		padding: theme.spacing(1),

		'& .MuiInputBase-input': {
			paddingBottom: '2px',
		},
	},
});

export default useStyles;
