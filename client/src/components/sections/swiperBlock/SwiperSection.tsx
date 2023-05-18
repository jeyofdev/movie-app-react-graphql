import MainSwiper from '@components/swiper/MainSwiper';
import { Box, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { SwiperSectionProps } from '../../../types/types/props';
import useStyles from './style';

const SwiperSection = ({ list, setMoviesSelectedId }: SwiperSectionProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	return (
		<>
			<Box sx={styles.topSectionBox}>
				<Typography variant='h4' sx={styles.sectionTitle}>
					Popular movies
				</Typography>

				<Link to='/' style={styles.link}>
					<Typography variant='h6'>See all</Typography>
				</Link>
			</Box>

			<MainSwiper list={list} setPopularMoviesSelected={setMoviesSelectedId} />
		</>
	);
};

export default SwiperSection;
