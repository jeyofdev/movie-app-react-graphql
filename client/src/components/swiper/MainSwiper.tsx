import ThumbnailCard from '@components/cards/thumbnailCard/ThumbnailCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum } from '../../types/enums';
import { MainSwiperProps } from '../../types/types/props';
import useStyles from './style';

const MainSwiper = ({ list }: MainSwiperProps) => {
	const styles = useStyles();
	const { width } = useWindowSize();

	const getSlidesPerView = () => {
		if (width < 300) {
			return 1;
		}

		if (width >= 200 && width < 400) {
			return 2;
		}

		if (width >= 400 && width < 600) {
			return 3;
		}

		if (width >= 600 && width < BreakpointEnum.SM) {
			return 4;
		}

		if (width >= BreakpointEnum.SM && width < BreakpointEnum.MD) {
			return 3;
		}

		if (width >= BreakpointEnum.MD && width < 1200) {
			return 4;
		}

		if (width >= 1200 && width < BreakpointEnum.LG) {
			return 5;
		}

		if (width >= BreakpointEnum.LG && width < 1600) {
			return 6;
		}

		if (width >= 1600 && width < BreakpointEnum.XL) {
			return 7;
		}

		return 9;
	};

	return (
		<>
			<Swiper
				slidesPerView={getSlidesPerView()}
				spaceBetween={20}
				navigation={true}
				modules={[Navigation]}
				className='mySwiper'
				style={styles.root}
			>
				{list.map(item => (
					<SwiperSlide key={item.id}>
						<ThumbnailCard title={item.title} poster_path={item?.poster_path} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default MainSwiper;
