import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTheme from '@hooks/useTheme';
import { Button } from '@mui/material';
import { useSwiper } from 'swiper/react';
import { SwiperDirectionEnum } from '../../../../types/enums';
import { SwiperButtonProps } from '../../../../types/types/props';
import useStyles from './style';

const SwiperButton = ({ direction }: SwiperButtonProps) => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const swiper = useSwiper();

	return (
		<Button
			onClick={() =>
				direction === SwiperDirectionEnum.LEFT
					? swiper.slidePrev()
					: swiper.slideNext()
			}
			sx={styles.root}
		>
			<FontAwesomeIcon
				icon={
					direction === SwiperDirectionEnum.LEFT
						? faChevronLeft
						: faChevronRight
				}
				color={theme.palette.primary.main}
				style={styles.icon}
			/>
		</Button>
	);
};

export default SwiperButton;
