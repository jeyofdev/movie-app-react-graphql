import { Theme } from '@mui/material';
import { DarkModeEnum } from '../../types/enums';

const useStyles = (theme: Theme) => ({
	root: {
		display: 'grid',
		gridTemplateColumns: 'repeat(12, 1fr)',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: theme.spacing(1),
		paddingTop: 0,
	},
	searchBox: {
		gridColumn: '1 / span 5',
	},
	darkModeBtn: {
		gridColumn: '12 / span 1',
		background: theme.palette.primary.main,
		borderRadius: '100%',
		width: '26px',
		height: '26px',
		minWidth: 'auto',

		'&:hover': {
			background: theme.palette.primary.main,
		},
	},
	darkModeIcon: {
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
