import PersonThumbnailCard from '@components/cards/PersonThumbnailCard/PersonThumbnailCard';
import BaseTooltip from '@components/ui/tooltips/baseTooltip/BaseTooltip';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CastMovie } from '@graphql/__generated__/graphql-type';
import { Box, Button } from '@mui/material';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import useTheme from '@hooks/useTheme';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum, RoutesEnum } from '../../../types/enums';
import { RoundedSwiperProps } from '../../../types/types/props';
import useStyles from './style';

const RoundedSwiper = ({ list, styleBox }: RoundedSwiperProps) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();
	const navigate = useNavigate();

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

	const slidePerView = () => {
		if (width >= BreakpointEnum.XL) return 7;
		if (width >= 1700) return 7;
		if (width >= BreakpointEnum.LG) return 6;
		if (width >= 1000) return 5;
		if (width >= BreakpointEnum.MD) return 4;
		if (width >= 850) return 5;
		if (width >= BreakpointEnum.SM) return 4;
		if (width >= 600) return 6;
		if (width >= 500) return 5;
		if (width >= BreakpointEnum.XS) return 4;

		return 4;
	};

	return (
		<>
			<Swiper
				slidesPerView={slidePerView()}
				spaceBetween={20}
				navigation={false}
				modules={[Navigation]}
				className='mySwiper'
				style={{ ...styles.root, ...styleBox }}
			>
				{list.map(item => (
					<SwiperSlide key={item.id}>
						<BaseTooltip title={item.name} arrow>
							<Button
								onClick={() => navigate(`/${RoutesEnum.PERSON}/${item.id}`)}
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
