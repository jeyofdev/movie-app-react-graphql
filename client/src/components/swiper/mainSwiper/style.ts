const useStyles = () => ({
	root: {
		width: '100%',
		height: 190,
	},
	swiperSlide: {
		textAlign: 'center',
		fontSize: '18px',
		background: '#fff',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
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
