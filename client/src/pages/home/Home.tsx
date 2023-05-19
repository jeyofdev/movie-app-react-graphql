import PreviewMovieCard from '@components/cards/previewMovieCard/MoviePreviewCard';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import SwiperSection from '@components/sections/swiperBlock/SwiperSection';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import ThumbsGallerySwiper from '@components/swiper/thumbsGallerySwiper/ThumbsGallerySwiper';
import { ThemeContext } from '@context/ThemeContext';
import {
	Movie,
	useMoviePreviewQuery,
	useNowPlayingMoviesQuery,
	usePopularMoviesQuery,
	useTopRatedMoviesQuery,
	useUpcomingMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Box, Button, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { MoviesListCategoryEnum } from '../../types/enums';
import useStyles from './style';

const Home = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const [nowPlayingMovies, setNowPlayingMovies] = useState<Array<Movie>>([]);
	const [popularMovies, setPopularMovies] = useState<Array<Movie>>([]);
	const [upComingMovies, setUpComingMovies] = useState<Array<Movie>>([]);
	const [topRatedMovies, setTopRatedMovies] = useState<Array<Movie>>([]);

	const [activeImages, setActiveImages] = useState<string | null | undefined>(
		null,
	);

	const [moviesSelectedId, setMoviesSelectedId] = useState<number | null>(null);

	const [moviesListCategory, setMoviesListCategory] =
		useState<MoviesListCategoryEnum | null>(null);

	const { loading, error } = useNowPlayingMoviesQuery({
		onCompleted(data) {
			setActiveImages(data?.nowPlayingMovies?.results[0]?.backdrop_path);

			setNowPlayingMovies(
				data?.nowPlayingMovies?.results
					? (data?.nowPlayingMovies?.results.slice(0, 5) as Array<Movie>)
					: [],
			);
		},
	});

	const { loading: popularMoviesLoading, error: popularMoviesError } =
		usePopularMoviesQuery({
			onCompleted(data) {
				setPopularMovies(
					data?.popularMovies?.results
						? (data?.popularMovies?.results as Array<Movie>)
						: [],
				);
			},
		});

	const { loading: upComingMovieLoading, error: upComingMovieError } =
		useUpcomingMoviesQuery({
			onCompleted(data) {
				setUpComingMovies(
					data?.upcomingMovies?.results
						? (data?.upcomingMovies?.results as Array<Movie>)
						: [],
				);
			},
		});

	const { loading: topRatedMoviesLoading, error: topRatedMoviesError } =
		useTopRatedMoviesQuery({
			onCompleted(data) {
				setTopRatedMovies(
					data?.topRatedMovies?.results
						? (data?.topRatedMovies?.results as Array<Movie>)
						: [],
				);
			},
		});

	const { data: moviePreviewData } = useMoviePreviewQuery({
		variables: { movieId: moviesSelectedId },
	});

	const { handleThemeMode } = useContext(ThemeContext);

	if (
		loading ||
		popularMoviesLoading ||
		upComingMovieLoading ||
		topRatedMoviesLoading
	) {
		return <Box>Loading...</Box>;
	}

	if (
		error ||
		popularMoviesError ||
		upComingMovieError ||
		topRatedMoviesError
	) {
		return <Box>{error?.message}</Box>;
	}

	return (
		<Box sx={styles.root}>
			<MainContainer>
				<Sidebar />
				<Box sx={styles.primaryContentBox}>
					<Box>
						<Button
							color='primary'
							onClick={() => {
								handleThemeMode();
							}}
						>
							darkmode
						</Button>
					</Box>

					<Box sx={styles.sectionBox}>
						<Box sx={styles.swiperContentBox(activeImages as string)}>
							<ThumbsGallerySwiper
								list={nowPlayingMovies}
								hasButton
								setActiveImage={setActiveImages}
								swiperBox={{}}
							/>
						</Box>
					</Box>

					<Box sx={styles.sectionBox}>
						<SwiperSection
							title='Popular movies'
							list={popularMovies}
							moviesListCategory={MoviesListCategoryEnum.POPULAR}
							setMoviesSelectedId={setMoviesSelectedId}
							setMoviesListCategory={setMoviesListCategory}
						/>

						{moviesListCategory === MoviesListCategoryEnum.POPULAR &&
							moviesSelectedId && (
								<PreviewMovieCard
									title={moviePreviewData?.movieDetails?.title}
									backdrop_path={moviePreviewData?.movieDetails?.backdrop_path}
									overview={moviePreviewData?.movieDetails?.overview}
									genres={moviePreviewData?.movieDetails?.genres}
									runtime={moviePreviewData?.movieDetails?.runtime}
									vote_average={moviePreviewData?.movieDetails?.vote_average}
									stylesBox={styles.previewBox}
								/>
							)}
					</Box>

					<Box sx={styles.sectionBox}>
						<SwiperSection
							title='Upcoming movies'
							list={upComingMovies}
							moviesListCategory={MoviesListCategoryEnum.UP_COMING}
							setMoviesSelectedId={setMoviesSelectedId}
							setMoviesListCategory={setMoviesListCategory}
						/>

						{moviesListCategory === MoviesListCategoryEnum.UP_COMING &&
							moviesSelectedId && (
								<PreviewMovieCard
									title={moviePreviewData?.movieDetails?.title}
									backdrop_path={moviePreviewData?.movieDetails?.backdrop_path}
									overview={moviePreviewData?.movieDetails?.overview}
									genres={moviePreviewData?.movieDetails?.genres}
									runtime={moviePreviewData?.movieDetails?.runtime}
									vote_average={moviePreviewData?.movieDetails?.vote_average}
									stylesBox={styles.previewBox}
								/>
							)}
					</Box>

					<Box sx={styles.sectionBox}>
						<SwiperSection
							title='Top rated'
							list={topRatedMovies}
							moviesListCategory={MoviesListCategoryEnum.TOP_RATING}
							setMoviesSelectedId={setMoviesSelectedId}
							setMoviesListCategory={setMoviesListCategory}
						/>

						{moviesListCategory === MoviesListCategoryEnum.TOP_RATING &&
							moviesSelectedId && (
								<PreviewMovieCard
									title={moviePreviewData?.movieDetails?.title}
									backdrop_path={moviePreviewData?.movieDetails?.backdrop_path}
									overview={moviePreviewData?.movieDetails?.overview}
									genres={moviePreviewData?.movieDetails?.genres}
									runtime={moviePreviewData?.movieDetails?.runtime}
									vote_average={moviePreviewData?.movieDetails?.vote_average}
									stylesBox={styles.previewBox}
								/>
							)}
					</Box>
				</Box>
			</MainContainer>
		</Box>
	);
};

export default Home;
