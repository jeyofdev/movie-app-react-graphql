import { Button } from '@mui/material';
import { MovieItemType } from '@pages/home/Home';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperThumbsType from './Type';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import style from './style';

const SwiperThumbs = ({
	list,
	hasButton,
	setActiveImage,
}: SwiperThumbsType) => {
	const handleClick = (newActiveImage: string) => {
		setActiveImage(newActiveImage);
	};

	const setImageRender = (imageSrc: string) => (
		<img
			src={`https://image.tmdb.org/t/p/w500/${imageSrc}`}
			style={style.swiperSlideImg}
		/>
	);

	return (
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
			{list.map((item: MovieItemType) => (
				<SwiperSlide key={item.id} style={style.swiperSlide}>
					{hasButton ? (
						<Button
							sx={style.swiperSlideBtn}
							onClick={() => handleClick(item.poster_path)}
						>
							{setImageRender(item.poster_path)}
						</Button>
					) : (
						setImageRender(item.poster_path)
					)}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperThumbs;
