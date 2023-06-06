import DetailsMovieCard from '@components/cards/detailsMovieCard/DetailsMovieCard';
import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import AlertBase from '@components/ui/alert/Alert';
import Loader from '@components/ui/loader/Loader';
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
		return <LoaderContainer />;
	}

	if (error || castError) {
		<AlertBase>An error has occurred !!!</AlertBase>;
	}

	return (
		<Box sx={styles.root}>
			<Box sx={styles.primaryContentBox}>
				<Loader />
				{data && (
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
				)}
			</Box>
		</Box>
	);
};

export default MovieDetails;
