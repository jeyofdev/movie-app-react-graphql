import { Button } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Movie } from '@graphql/__generated__/graphql-type';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { SwiperThumbsGalleryType } from '../../../types/types/props';
import useStyles from './style';

const ThumbsGallerySwiper = ({
	list,
	hasButton,
	setActiveImage,
	swiperBox,
}: SwiperThumbsGalleryType) => {
	const style = useStyles();
	const handleClick = (newActiveImage: Movie) => {
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
			navigation={false}
			loop={true}
			watchSlidesProgress={true}
			modules={[FreeMode, Navigation, Thumbs]}
			style={{ ...style.swiper, ...swiperBox } as object}
		>
			{list.map((item: Movie) => (
				<SwiperSlide key={item.id} style={style.swiperSlide}>
					{hasButton ? (
						<Button
							sx={{
								cursor: 'pointer',
							}}
							onClick={() => handleClick(item)}
						>
							{setImageRender(item.backdrop_path as string)}
						</Button>
					) : (
						setImageRender(item.backdrop_path as string)
					)}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ThumbsGallerySwiper;
