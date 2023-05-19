import { Button, useTheme } from '@mui/material';
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
	activeItemSwiperGallery,
	setActiveImage,
	swiperBox,
}: SwiperThumbsGalleryType) => {
	const theme = useTheme();
	const style = useStyles(theme);
	const handleClick = (newActiveImage: Movie) => {
		setActiveImage(newActiveImage);
	};

	const setImageRender = (movie: Movie) => (
		<img
			src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
			style={{
				...style.swiperSlideImg(activeItemSwiperGallery.id === movie.id),
			}}
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
							{setImageRender(item)}
						</Button>
					) : (
						setImageRender(item)
					)}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ThumbsGallerySwiper;
