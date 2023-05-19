import MainSwiper from '@components/swiper/mainSwiper/MainSwiper';
import ThumbsGallerySwiper from '@components/swiper/thumbsGallerySwiper/ThumbsGallerySwiper';
import { Box, Typography, useTheme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSectionProps } from '../../../types/types/props';
import useStyles from './style';

const SwiperSection = ({
	swiperType,
	title,
	list,
	moviesListCategory,
	activeImage,
	setActiveImage,
	setMoviesSelectedId,
	setMoviesListCategory,
}: SwiperSectionProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);

	return (
		<>
			{!swiperType ? (
				<>
					<Box sx={styles.topSectionBox}>
						<Typography variant='h4' sx={styles.sectionTitle}>
							{title}
						</Typography>

						<Link to='/' style={styles.link}>
							<Typography variant='h6'>See all</Typography>
						</Link>
					</Box>

					<MainSwiper
						list={list}
						moviesListCategory={moviesListCategory}
						setPopularMoviesSelected={
							setMoviesSelectedId as Dispatch<SetStateAction<number | null>>
						}
						setMoviesListCategory={setMoviesListCategory}
						component='ThumbnailCard'
					/>
				</>
			) : (
				<Box sx={styles.swiperContentBox(activeImage as string)}>
					<ThumbsGallerySwiper
						list={list}
						hasButton
						setActiveImage={
							setActiveImage as React.Dispatch<
								React.SetStateAction<string | null>
							>
						}
						swiperBox={{}}
					/>
				</Box>
			)}
		</>
	);
};

export default SwiperSection;
