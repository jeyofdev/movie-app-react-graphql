import ThumbnailCard from '@components/cards/thumbnailCard/ThumbnailCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { MainSwiperProps } from '../../types/types/props';
import useStyles from './style';

const MainSwiper = ({ list }: MainSwiperProps) => {
	const styles = useStyles();

	return (
		<>
			<Swiper
				slidesPerView={5}
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
