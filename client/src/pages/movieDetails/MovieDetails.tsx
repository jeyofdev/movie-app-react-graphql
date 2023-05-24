import DetailsMovieCard from '@components/cards/detailsMovieCard/DetailsMovieCard';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import { useMovieDetailsQuery } from '@graphql/__generated__/graphql-type';
import { Box, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const MovieDetails = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { movieId } = useParams();

	const { loading, error, data } = useMovieDetailsQuery({
		variables: { movieId: Number(movieId) },
	});

	if (loading) {
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box>{error?.message}</Box>;
	}

	return (
		<Box sx={styles.root}>
			<MainContainer>
				<Sidebar />
				<Box sx={styles.primaryContentBox}>
					<DetailsMovieCard
						title={data?.movieDetails?.title}
						overview={data?.movieDetails?.overview}
						genres={data?.movieDetails?.genres}
						runtime={data?.movieDetails?.runtime}
						vote_average={data?.movieDetails?.vote_average}
						poster_path={data?.movieDetails?.poster_path}
						backdrop_path={data?.movieDetails?.backdrop_path}
					/>
				</Box>
			</MainContainer>
		</Box>
	);
};

export default MovieDetails;
