import PersonThumbnailCard from '@components/cards/PersonThumbnailCard/PersonThumbnailCard';
import BaseTooltip from '@components/ui/tooltips/baseTooltip/BaseTooltip';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CastMovie } from '@graphql/__generated__/graphql-type';
import { Box, Button, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { RoundedSwiperProps } from '../../../types/types/props';
import useStyles from './style';

const RoundedSwiper = ({ list }: RoundedSwiperProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const card = (item: CastMovie): ReactNode | null => (
		<>
			{item?.profile_path ? (
				<PersonThumbnailCard
					name={item?.name}
					profile_path={item?.profile_path}
				/>
			) : (
				<Box sx={styles.iconBox}>
					<FontAwesomeIcon icon={faUser} style={styles.icon} />
				</Box>
			)}
		</>
	);

	return (
		<>
			<Swiper
				slidesPerView={6}
				spaceBetween={20}
				navigation={false}
				modules={[Navigation]}
				className='mySwiper'
				style={styles.root}
			>
				{list.map(item => (
					<SwiperSlide key={item.id}>
						<BaseTooltip title={item.name} arrow>
							<Button
								onClick={() => {}}
								disableRipple={true}
								sx={{ padding: 0 }}
							>
								{card(item)}
							</Button>
						</BaseTooltip>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default RoundedSwiper;
