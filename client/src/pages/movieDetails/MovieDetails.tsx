import DetailsMovieCard from '@components/cards/detailsMovieCard/DetailsMovieCard';
import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import AlertBase from '@components/ui/alert/Alert';
import { CastMovie, Genre } from '@graphql/__generated__/graphql-type';
import useMovieCast from '@hooks/useMovieCast';
import useMovieDetails from '@hooks/useMovieDetails';
import { Trans } from '@lingui/macro';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const MovieDetails = () => {
	const styles = useStyles();
	const { movieId } = useParams();

	const { loading, error, data } = useMovieDetails(movieId as string);
	const {
		loading: castLoading,
		error: castError,
		data: castData,
	} = useMovieCast(movieId as string);

	if (loading || castLoading) {
		return <LoaderContainer />;
	}

	if (error || castError) {
		return (
			<AlertBase>
				<Trans>An error has occurred !!!</Trans>
			</AlertBase>
		);
	}

	return (
		<Box sx={styles.root}>
			<Box sx={styles.primaryContentBox}>
				<DetailsMovieCard
					title={data?.movieDetails?.title}
					overview={data?.movieDetails?.overview}
					genres={(data?.movieDetails?.genres as Array<Genre>).filter(
						genre => genre?.id !== 99,
					)}
					runtime={data?.movieDetails?.runtime}
					vote_average={data?.movieDetails?.vote_average}
					poster_path={data?.movieDetails?.poster_path}
					backdrop_path={data?.movieDetails?.backdrop_path}
					cast={castData?.castByMovie?.cast as Array<CastMovie>}
				/>
			</Box>
		</Box>
	);
};

export default MovieDetails;
