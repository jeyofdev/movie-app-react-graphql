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
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum } from '../../../types/enums';
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
	const { width } = useWindowSize();

	const handleClick = (newActiveImage: Movie) => {
		setActiveImage(newActiveImage);
	};

	const slidePerView = () => {
		if (width >= BreakpointEnum.XL) return 5;
		if (width >= BreakpointEnum.LG) return 4;
		if (width >= BreakpointEnum.MD) return 4;
		if (width >= BreakpointEnum.SM) return 3;
		if (width >= 600) return 4;
		if (width >= 500) return 3;
		if (width >= BreakpointEnum.XS) return 2;

		return 4;
	};

	const slideHeight = () => {
		if (width >= BreakpointEnum.XL) return '75px';
		if (width >= BreakpointEnum.LG) return '75px';
		if (width >= BreakpointEnum.MD) return '70px';
		if (width >= BreakpointEnum.SM) return '65px';
		if (width >= BreakpointEnum.XS) return '75px';

		return 4;
	};

	const setImageRender = (movie: Movie) => (
		<img
			src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
			style={{
				...style.swiperSlideImg(activeItemSwiperGallery.id === movie.id),
				height: slideHeight(),
			}}
		/>
	);

	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={slidePerView()}
			freeMode={true}
			navigation={false}
			loop={true}
			watchSlidesProgress={true}
			modules={[FreeMode, Navigation, Thumbs]}
			style={{ ...style.swiper, ...swiperBox } as object}
		>
			{list.map((item: Movie) => (
				<SwiperSlide key={item.id} style={{ ...style.swiperSlide }}>
					{hasButton ? (
						<Button
							sx={{
								cursor: 'pointer',
								padding: 0,
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
