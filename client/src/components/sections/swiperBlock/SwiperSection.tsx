import SelectedThumbsGalleryCard from '@components/cards/selectedThumbsGalleryCard/SelectedThumbsGalleryCard';
import MainSwiper from '@components/swiper/mainSwiper/MainSwiper';
import ThumbsGallerySwiper from '@components/swiper/thumbsGallerySwiper/ThumbsGallerySwiper';
import { Movie } from '@graphql/__generated__/graphql-type';
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
	activeItemSwiperGallery,
	setActiveItemSwiperGallery,
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
				<Box
					sx={styles.swiperContentBox(
						activeItemSwiperGallery?.backdrop_path as string,
					)}
				>
					<Box style={styles.mask as object} />
					<SelectedThumbsGalleryCard
						title={activeItemSwiperGallery?.title}
						vote_average={activeItemSwiperGallery?.vote_average}
						runtime={125}
						genres={[
							{ id: 1, name: 'action' },
							{ id: 2, name: 'Comedy' },
						]}
						overview={activeItemSwiperGallery?.overview}
					/>

					<ThumbsGallerySwiper
						list={list}
						hasButton
						activeItemSwiperGallery={activeItemSwiperGallery as Movie}
						setActiveImage={
							setActiveItemSwiperGallery as Dispatch<
								SetStateAction<Movie | null>
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
