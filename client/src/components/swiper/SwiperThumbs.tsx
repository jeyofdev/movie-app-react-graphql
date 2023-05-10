import {
	FreeMode,
	Navigation,
	Thumbs,
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperThumbsType from './Type';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import style from './style';

const SwiperThumbs = ({ list }: SwiperThumbsType) => (
	<Swiper
		spaceBetween={10}
		slidesPerView={4}
		freeMode={true}
		navigation={true}
		loop={true}
		watchSlidesProgress={true}
		modules={[FreeMode, Navigation, Thumbs]}
		className='mySwiper'
		style={style.swiper}
	>
		{list.map(item => (
			<SwiperSlide key={item.id} style={style.swiperSlide}>
				<img
					src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
					style={style.swiperSlideImg}
				/>
			</SwiperSlide>
		))}
	</Swiper>
);

export default SwiperThumbs;
