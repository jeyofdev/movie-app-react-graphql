import PreviewMovieCard from '@components/cards/previewMovieCard/MoviePreviewCard';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import MainSwiper from '@components/swiper/MainSwiper';
import { ThemeContext } from '@context/ThemeContext';
import {
	Movie,
	useMoviePreviewQuery,
	usePopularMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './style';

const Home = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const [popularMovies, setPopularMovies] = useState<Array<Movie>>([]);
	const [popularMoviesSelectedId, setPopularMoviesSelectedId] = useState<
		number | null
	>(null);

	const { loading, error } = usePopularMoviesQuery({
		onCompleted(data) {
			setPopularMovies(
				data?.popularMovies?.results
					? (data?.popularMovies?.results as Array<Movie>)
					: [],
			);
		},
	});

	const { data: moviePreviewData } = useMoviePreviewQuery({
		variables: { movieId: popularMoviesSelectedId },
	});

	const { handleThemeMode } = useContext(ThemeContext);

	if (loading) {
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box>{error.message}</Box>;
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
						<Typography variant='h4' sx={styles.sectionTitle}>
							Popular movies
						</Typography>
						<Link to='/' style={styles.link}>
							<Typography>See all</Typography>
						</Link>
					</Box>
					<MainSwiper
						list={popularMovies}
						setPopularMoviesSelected={setPopularMoviesSelectedId}
					/>

					{popularMoviesSelectedId && (
						<PreviewMovieCard
							title={moviePreviewData?.movieDetails?.title}
							backdrop_path={moviePreviewData?.movieDetails?.backdrop_path}
							overview={moviePreviewData?.movieDetails?.overview}
							genres={moviePreviewData?.movieDetails?.genres}
							stylesBox={styles.previewBox}
						/>
					)}
				</Box>
			</MainContainer>
		</Box>
	);
};

export default Home;
