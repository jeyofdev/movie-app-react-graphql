const useStyles = () => ({
	root: {},
	imagesBox: {
		display: 'flex',
		position: 'relative',
	},
	cardBox: {
		position: 'absolute',
	},
	cardBoxOne: {
		left: '50%',
		transform: {
			xs: 'rotate(-18deg) translate(-124px, -25px)',
			sm: 'rotate(-18deg) translate(-190px, -37px)',
			md: 'rotate(-18deg) translate(-190px, -40px)',
			lg: 'rotate(-18deg) translate(-250px, -50px)',
		},
		zIndex: 10,
	},
	cardBoxTwo: {
		left: '50%',
		transform: 'rotate(0deg) translateX(-50%)',
		zIndex: 1000,
	},
	cardBoxThree: {
		left: '50%',
		transform: {
			xs: 'rotate(18deg) translate(8px, 13px)',
			sm: 'rotate(18deg) translate(40px, 20px)',
			md: 'rotate(18deg) translate(25px, 13px)',
			lg: 'rotate(18deg) translate(16px, 23px)',
		},
		zIndex: 10,
	},
});

export default useStyles;
