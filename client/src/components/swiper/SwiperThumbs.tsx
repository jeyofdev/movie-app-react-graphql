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
		watchSlidesProgress={true}
		modules={[FreeMode, Navigation, Thumbs]}
		className='mySwiper'
		style={style.swiper}
	>
		{list.map((item, i) => (
			<SwiperSlide key={item.id} style={style.swiperSlide}>
				<img src={item.image} style={style.swiperSlideImg} />
				{i}
			</SwiperSlide>
		))}
	</Swiper>
);

export default SwiperThumbs;
