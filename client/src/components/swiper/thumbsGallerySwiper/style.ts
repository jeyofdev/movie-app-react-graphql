import { Theme } from '@mui/material';

const useStyles = (theme: Theme) => ({
	swiper: {
		position: 'absolute',
		bottom: '0.75rem',
	},
	swiperSlide: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		marginRight: 0,
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'center',
	},
	swiperSlideImg: (isActive: boolean) => ({
		display: 'block',
		width: '100%',
		// height: '50px',
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
