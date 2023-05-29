import { Box, Button, useTheme } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { A11y, FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import SwiperButton from '@components/ui/Button/swiperButton/SwiperButton';
import { Movie } from '@graphql/__generated__/graphql-type';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum, SwiperDirectionEnum } from '../../../types/enums';
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
	const styles = useStyles(theme);
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
				...styles.swiperSlideImg(activeItemSwiperGallery.id === movie.id),
				height: slideHeight(),
			}}
		/>
	);

	return (
		<Swiper
			spaceBetween={0}
			slidesPerView={slidePerView()}
			freeMode
			navigation={false}
			loop
			watchSlidesProgress
			modules={[FreeMode, Navigation, Thumbs, A11y]}
			style={{ ...styles.swiper, ...swiperBox } as object}
		>
			{list.map((item: Movie) => (
				<SwiperSlide key={item.id} style={{ ...styles.swiperSlide }}>
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

			<Box sx={{ ...styles.btnBox, ...styles.btnLeftBox }}>
				<SwiperButton direction={SwiperDirectionEnum.LEFT} />
			</Box>

			<Box sx={{ ...styles.btnBox, ...styles.btnRightBox }}>
				<SwiperButton direction={SwiperDirectionEnum.RIGHT} />
			</Box>
		</Swiper>
	);
};

export default ThumbsGallerySwiper;
