import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	swiper: {
		position: 'absolute',
		bottom: '0px',
		right: 0,
		width: '50%',
	},
	swiperSlide: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
	},
	swiperSlideImg: (isActive: boolean) => ({
		display: 'block',
		width: '100%',
		height: '50px',
		borderRadius: '0.75rem',
		border: `2px solid ${
			isActive ? theme.palette.common.white : 'transparent'
		}`,
	}),
	swiperSlideBtn: {
		cursor: 'pointer',
	},
	swiperButtonPrev: {
		color: 'white',
	},
});

export default useStyles;
