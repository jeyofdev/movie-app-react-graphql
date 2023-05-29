import SelectedThumbsGalleryCard from '@components/cards/selectedThumbsGalleryCard/SelectedThumbsGalleryCard';
import RoundedSwiper from '@components/swiper/RoundedSwiper/RoundedSwiper';
import MainSwiper from '@components/swiper/mainSwiper/MainSwiper';
import ThumbsGallerySwiper from '@components/swiper/thumbsGallerySwiper/ThumbsGallerySwiper';
import { CastMovie, Movie } from '@graphql/__generated__/graphql-type';
import { Box, Typography, useTheme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useWindowSize } from 'usehooks-ts';
import { BreakpointEnum, MoviesListCategoryEnum } from '../../../types/enums';
import { SwiperSectionProps } from '../../../types/types/props';
import useStyles from './style';

const SwiperSection = ({
	swiperType,
	title,
	list,
	linkAllResult,
	moviesListCategory,
	activeItemSwiperGallery,
	setActiveItemSwiperGallery,
	setMoviesSelectedId,
	setMoviesListCategory,
	titleStyle,
}: SwiperSectionProps) => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { width } = useWindowSize();

	const thumbsBoxSize = () => {
		if (width >= BreakpointEnum.XL) return { width: '50%', right: '0' };
		if (width >= BreakpointEnum.LG) return { width: '50%', right: '0' };
		if (width >= 1200) return { width: '75%', right: '0' };
		if (width >= BreakpointEnum.MD) return { width: '90%', right: '0' };
		if (width >= BreakpointEnum.SM) return { width: '90%', right: '0' };

		return { width: '100%', left: '0' };
	};

	if (!swiperType) {
		return (
			<>
				<Box sx={styles.topSectionBox}>
					<Typography
						variant='h4'
						sx={{ ...styles.sectionTitle, ...titleStyle }}
					>
						{title}
					</Typography>

					<Link to={linkAllResult as string} style={styles.link}>
						<Typography variant='h6'>See all</Typography>
					</Link>
				</Box>

				<MainSwiper
					list={list as Array<Movie>}
					moviesListCategory={moviesListCategory as MoviesListCategoryEnum}
					setPopularMoviesSelected={
						setMoviesSelectedId as Dispatch<SetStateAction<number | null>>
					}
					setMoviesListCategory={
						setMoviesListCategory as Dispatch<
							SetStateAction<MoviesListCategoryEnum | null>
						>
					}
					component='ThumbnailCard'
				/>
			</>
		);
	}

	if (swiperType === 'thumbs-gallery') {
		return (
			<Box
				sx={styles.swiperContentBox(
					activeItemSwiperGallery?.backdrop_path as string,
				)}
			>
				<Box style={styles.mask as object} />
				<SelectedThumbsGalleryCard
					id={activeItemSwiperGallery?.id}
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
					list={list as Array<Movie>}
					hasButton
					activeItemSwiperGallery={activeItemSwiperGallery as Movie}
					setActiveImage={
						setActiveItemSwiperGallery as Dispatch<SetStateAction<Movie | null>>
					}
					swiperBox={thumbsBoxSize() as object}
				/>
			</Box>
		);
	}

	if (swiperType === 'person') {
		return (
			<>
				<Box sx={{ ...styles.topSectionBox, marginBottom: 0 }}>
					<Typography
						variant='h5'
						sx={{ ...styles.sectionTitle, ...titleStyle }}
					>
						{title}
					</Typography>
				</Box>

				<RoundedSwiper list={list as Array<CastMovie>} />
			</>
		);
	}

	return <></>;
};

export default SwiperSection;
