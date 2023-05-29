import ThumbnailCard from '@components/cards/thumbnailCard/ThumbnailCard';
import SwiperButton from '@components/ui/Button/swiperButton/SwiperButton';
import { Movie } from '@graphql/__generated__/graphql-type';
import { Box, Button } from '@mui/material';
import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum, SwiperDirectionEnum } from '../../../types/enums';
import { MainSwiperProps } from '../../../types/types/props';
import useStyles from './style';

const MainSwiper = ({
	list,
	component,
	moviesListCategory,
	setPopularMoviesSelected,
	setMoviesListCategory,
}: MainSwiperProps) => {
	const styles = useStyles();
	const { width } = useWindowSize();

	const getSlidesPerView = () => {
		if (width < 300) return 1;
		if (width >= 200 && width < 400) return 2;
		if (width >= 400 && width < 600) return 3;
		if (width >= 600 && width < BreakpointEnum.SM) return 4;
		if (width >= BreakpointEnum.SM && width < BreakpointEnum.MD) return 3;
		if (width >= BreakpointEnum.MD && width < 1200) return 4;
		if (width >= 1200 && width < BreakpointEnum.LG) return 5;
		if (width >= BreakpointEnum.LG && width < 1600) return 6;
		if (width >= 1600 && width < BreakpointEnum.XL) return 7;

		return 9;
	};

	const card = (item: Movie): ReactNode | null => {
		if (component === 'ThumbnailCard') {
			return (
				<ThumbnailCard title={item.title} poster_path={item?.poster_path} />
			);
		}

		return null;
	};

	const handleClick = (item: Movie) => {
		setPopularMoviesSelected(item.id as number);
		setMoviesListCategory(moviesListCategory);
	};

	return (
		<>
			<Swiper
				slidesPerView={getSlidesPerView()}
				spaceBetween={20}
				navigation={false}
				modules={[Navigation]}
				className='mySwiper'
				style={styles.root}
			>
				{list.map(item => (
					<SwiperSlide key={item.id}>
						<Button
							onClick={() => handleClick(item)}
							disableRipple={true}
							sx={{ padding: 0 }}
						>
							{card(item)}
						</Button>
					</SwiperSlide>
				))}
				<Box sx={{ ...styles.btnBox, ...styles.btnLeftBox }}>
					<SwiperButton direction={SwiperDirectionEnum.LEFT} />
				</Box>

				<Box sx={{ ...styles.btnBox, ...styles.btnRightBox }}>
					<SwiperButton direction={SwiperDirectionEnum.RIGHT} />
				</Box>
			</Swiper>
		</>
	);
};

export default MainSwiper;
