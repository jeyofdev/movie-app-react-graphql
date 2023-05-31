import DetailsMovieCard from '@components/cards/detailsMovieCard/DetailsMovieCard';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import {
	CastMovie,
	useCastByMovieQuery,
	useMovieDetailsQuery,
} from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const MovieDetails = () => {
	const styles = useStyles();
	const { movieId } = useParams();

	const { loading, error, data } = useMovieDetailsQuery({
		variables: { movieId: Number(movieId) },
	});

	const {
		loading: castLoading,
		error: castError,
		data: castData,
	} = useCastByMovieQuery({
		variables: { movieId: Number(movieId) },
	});

	if (loading || castLoading) {
		return <Box>Loading...</Box>;
	}

	if (error || castError) {
		return <Box>{error?.message}</Box>;
	}

	return (
		<MainContainer>
			<Box sx={styles.root}>
				<Box sx={styles.primaryContentBox}>
					<DetailsMovieCard
						title={data?.movieDetails?.title}
						overview={data?.movieDetails?.overview}
						genres={data?.movieDetails?.genres}
						runtime={data?.movieDetails?.runtime}
						vote_average={data?.movieDetails?.vote_average}
						poster_path={data?.movieDetails?.poster_path}
						backdrop_path={data?.movieDetails?.backdrop_path}
						cast={castData?.castByMovie?.cast as Array<CastMovie>}
					/>
				</Box>
			</Box>
		</MainContainer>
	);
};

export default MovieDetails;
