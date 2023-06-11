import DetailsMovieCard from '@components/cards/detailsMovieCard/DetailsMovieCard';
import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	CastMovie,
	useCastByMovieQuery,
	useMovieDetailsQuery,
} from '@graphql/__generated__/graphql-type';
import { Trans } from '@lingui/macro';
import { Box } from '@mui/material';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const MovieDetails = () => {
	const styles = useStyles();
	const { movieId } = useParams();
	const { currentLocale } = useContext(TranslationContext);

	const { loading, error, data } = useMovieDetailsQuery({
		variables: {
			movieId: Number(movieId),
			options: { language: currentLocale },
		},
		fetchPolicy: 'cache-and-network',
	});

	const {
		loading: castLoading,
		error: castError,
		data: castData,
	} = useCastByMovieQuery({
		variables: { movieId: Number(movieId) },
		fetchPolicy: 'cache-and-network',
	});

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
					genres={data?.movieDetails?.genres}
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
