import { Theme } from '@mui/material';
import { DarkModeEnum } from '../../../types/enums';

const useStyles = (theme: Theme) => ({
	appBar: {
		width: 0,
		right: 'auto',
	},
	menuRoot: {
		width: '100%',
	},
	menuBox: {
		padding: theme.spacing(4),
		height: '100%',
		backgroundColor: theme.palette.background.paper,
		width: '320px',
		borderRight: `0.1px solid ${theme.palette.primary.main}`,
	},
	iconBtn: {
		marginBottom: theme.spacing(2),
	},
	closeIcon: {
		fontSize: '1.75rem',
	},
	openIcon: {
		fontSize: '1.75rem',
	},
	divider: (darkMode: DarkModeEnum) => ({
		marginTop: {
			xs: 0,
			sm: theme.spacing(1.5),
		},
		marginBottom: theme.spacing(2),
		borderColor:
			darkMode === DarkModeEnum.DARK
				? theme.palette.grey[800]
				: theme.palette.grey[200],
	}),
	menuItemBox: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(1.5),
	},
});

export default useStyles;
