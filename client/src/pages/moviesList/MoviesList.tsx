import PreviewMovieCard from '@components/cards/previewMovieCard/MoviePreviewCard';
import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import SwiperSection from '@components/sections/swiperBlock/SwiperSection';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	Genre,
	Movie,
	useMoviePreviewQuery,
	useNowPlayingMoviesQuery,
	usePopularMoviesQuery,
	useTopRatedMoviesQuery,
	useUpcomingMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Trans, t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { Box, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { MoviesListCategoryEnum, RoutesEnum } from '../../types/enums';
import useStyles from './style';

const MoviesList = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { currentLocale, currentRegion } = useContext(TranslationContext);

	useLingui();

	const [nowPlayingMovies, setNowPlayingMovies] = useState<Array<Movie>>([]);
	const [popularMovies, setPopularMovies] = useState<Array<Movie>>([]);
	const [upComingMovies, setUpComingMovies] = useState<Array<Movie>>([]);
	const [topRatedMovies, setTopRatedMovies] = useState<Array<Movie>>([]);

	const [activeItemSwiperGallery, setActiveItemSwiperGallery] =
		useState<Movie | null>(null);

	const [moviesSelectedId, setMoviesSelectedId] = useState<number | null>(null);

	const [moviesListCategory, setMoviesListCategory] =
		useState<MoviesListCategoryEnum | null>(null);

	const { loading, error } = useNowPlayingMoviesQuery({
		variables: {
			options: {
				language: currentLocale,
				region: currentRegion,
			},
		},
		fetchPolicy: 'cache-and-network',
		onCompleted(data) {
			setActiveItemSwiperGallery(data?.nowPlayingMovies?.results[0] as Movie);

			setNowPlayingMovies(
				data?.nowPlayingMovies?.results
					? (data?.nowPlayingMovies?.results as Array<Movie>)
					: [],
			);
		},
	});

	const { loading: popularMoviesLoading, error: popularMoviesError } =
		usePopularMoviesQuery({
			variables: {
				options: {
					language: currentLocale,
					region: currentRegion,
				},
			},
			fetchPolicy: 'cache-and-network',
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
			variables: {
				options: {
					language: currentLocale,
					region: currentRegion,
				},
			},
			fetchPolicy: 'cache-and-network',
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
			variables: {
				options: {
					language: currentLocale,
					region: currentRegion,
				},
			},
			fetchPolicy: 'cache-and-network',
			onCompleted(data) {
				setTopRatedMovies(
					data?.topRatedMovies?.results
						? (data?.topRatedMovies?.results as Array<Movie>)
						: [],
				);
			},
		});

	const { data: moviePreviewData } = useMoviePreviewQuery({
		variables: {
			movieId: moviesSelectedId,
			options: {
				language: currentLocale,
				region: currentRegion,
			},
		},
		fetchPolicy: 'cache-and-network',
	});

	if (
		loading ||
		popularMoviesLoading ||
		upComingMovieLoading ||
		topRatedMoviesLoading
	) {
		return <LoaderContainer />;
	}

	if (
		error ||
		popularMoviesError ||
		upComingMovieError ||
		topRatedMoviesError
	) {
		return (
			<AlertBase>
				<Trans>An error has occurred !!!</Trans>
			</AlertBase>
		);
	}

	return (
		<Box sx={styles.root}>
			<Box sx={styles.primaryContentBox}>
				<Box sx={styles.sectionBox}>
					<SwiperSection
						swiperType='thumbs-gallery'
						title='Popular movies'
						list={nowPlayingMovies?.slice(0, 10)}
						activeItemSwiperGallery={activeItemSwiperGallery}
						moviesListCategory={MoviesListCategoryEnum.POPULAR}
						setMoviesListCategory={setMoviesListCategory}
						setActiveItemSwiperGallery={setActiveItemSwiperGallery}
					/>
				</Box>

				<Box sx={styles.sectionBox}>
					<SwiperSection
						title={t`Popular movies`}
						list={popularMovies}
						linkAllResult={`/${RoutesEnum.MOVIES_POPULAR}`}
						moviesListCategory={MoviesListCategoryEnum.POPULAR}
						setMoviesSelectedId={setMoviesSelectedId}
						setMoviesListCategory={setMoviesListCategory}
					/>

					{moviesListCategory === MoviesListCategoryEnum.POPULAR &&
						moviesSelectedId && (
							<PreviewMovieCard
								id={moviePreviewData?.movieDetails?.id}
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
						title={t`Upcoming movies`}
						list={upComingMovies}
						linkAllResult={`/${RoutesEnum.MOVIES_UPCOMING}`}
						moviesListCategory={MoviesListCategoryEnum.UP_COMING}
						setMoviesSelectedId={setMoviesSelectedId}
						setMoviesListCategory={setMoviesListCategory}
					/>

					{moviesListCategory === MoviesListCategoryEnum.UP_COMING &&
						moviesSelectedId && (
							<PreviewMovieCard
								id={moviePreviewData?.movieDetails?.id}
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
						title={t`Top rated movies`}
						list={topRatedMovies}
						linkAllResult={`/${RoutesEnum.MOVIES_TOP_RATED}`}
						moviesListCategory={MoviesListCategoryEnum.TOP_RATING}
						setMoviesSelectedId={setMoviesSelectedId}
						setMoviesListCategory={setMoviesListCategory}
					/>

					{moviesListCategory === MoviesListCategoryEnum.TOP_RATING &&
						moviesSelectedId && (
							<PreviewMovieCard
								id={moviePreviewData?.movieDetails?.id}
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
						title={t`Now playing movies`}
						list={nowPlayingMovies}
						linkAllResult={`/${RoutesEnum.MOVIES_NOW_PLAYING}`}
						moviesListCategory={MoviesListCategoryEnum.NOW_PLAYING}
						setMoviesSelectedId={setMoviesSelectedId}
						setMoviesListCategory={setMoviesListCategory}
					/>

					{moviesListCategory === MoviesListCategoryEnum.NOW_PLAYING &&
						moviesSelectedId && (
							<PreviewMovieCard
								id={moviePreviewData?.movieDetails?.id}
								title={moviePreviewData?.movieDetails?.title}
								backdrop_path={moviePreviewData?.movieDetails?.backdrop_path}
								overview={moviePreviewData?.movieDetails?.overview}
								genres={moviePreviewData?.movieDetails?.genres as Array<Genre>}
								runtime={moviePreviewData?.movieDetails?.runtime}
								vote_average={moviePreviewData?.movieDetails?.vote_average}
								stylesBox={styles.previewBox}
							/>
						)}
				</Box>
			</Box>
		</Box>
	);
};

export default MoviesList;
