import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import useStyles from './style';

const MainSwiper = () => {
	const styles = useStyles();
	return (
		<>
			<Swiper
				slidesPerView={4}
				spaceBetween={20}
				navigation={true}
				modules={[Navigation]}
				className='mySwiper'
				style={styles.root}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
				<SwiperSlide>Slide 5</SwiperSlide>
				<SwiperSlide>Slide 6</SwiperSlide>
				<SwiperSlide>Slide 7</SwiperSlide>
				<SwiperSlide>Slide 8</SwiperSlide>
				<SwiperSlide>Slide 9</SwiperSlide>
			</Swiper>
		</>
	);
};

export default MainSwiper;
