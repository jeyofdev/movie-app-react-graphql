import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		width: '100%',
		height: '234px',
	},
	swiperSlide: {
		textAlign: 'center',
		fontSize: '18px',
		background: '#fff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconBox: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		background: '#ddd',
		borderRadius: '100%',
		width: '60px',
		height: '60px',
	},
	icon: {
		height: '2rem',
		minWidth: '2rem',
		color: theme.palette.primary.main,
	},
});

export default useStyles;
