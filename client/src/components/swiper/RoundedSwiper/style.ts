import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	root: {
		width: '100%',
		// height: '234px',
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
	btnBox: {
		position: 'absolute',
		top: '50%',
		zIndex: 1000,
		transform: 'translateY(-50%)',
	},
	btnLeftBox: {
		left: '0.4rem',
	},
	btnRightBox: {
		right: '0.4rem',
	},
});

export default useStyles;
