import DetailsPersonCard from '@components/cards/detailsPersonCard/DetailsPersonCard';
import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	Movie,
	useMoviesByCastPersonQuery,
	usePersonDetailsQuery,
} from '@graphql/__generated__/graphql-type';
import { Trans } from '@lingui/macro';
import { Box, Typography, useTheme } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const Person = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { personId } = useParams();
	const { currentLocale } = useContext(TranslationContext);

	const {
		loading: personDetailsLoading,
		error: personDetailsError,
		data: personDetailsData,
	} = usePersonDetailsQuery({
		variables: {
			personId: Number(personId),
			options: {
				language: currentLocale,
			},
		},
		fetchPolicy: 'cache-and-network',
	});

	const {
		loading: moviesByCastPersonLoading,
		error: moviesByCastPersonError,
		data: moviesByCastPersonData,
	} = useMoviesByCastPersonQuery({
		variables: {
			personId: Number(personId),
			options: {
				language: currentLocale,
			},
		},
		fetchPolicy: 'cache-and-network',
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (personDetailsLoading || moviesByCastPersonLoading) {
		return <LoaderContainer />;
	}

	if (personDetailsError || moviesByCastPersonError) {
		return <AlertBase>An error has occurred !!!</AlertBase>;
	}

	return (
		<Box sx={styles.root}>
			<DetailsPersonCard
				name={personDetailsData?.personDetails?.name as string}
				birthday={personDetailsData?.personDetails?.birthday as string}
				deathday={personDetailsData?.personDetails?.deathday as string}
				place_of_birth={
					personDetailsData?.personDetails?.place_of_birth as string
				}
				profile_path={personDetailsData?.personDetails?.profile_path as string}
				biography={personDetailsData?.personDetails?.biography as string}
			/>

			<Box sx={styles.listMoviesBox}>
				<Typography variant='h5' sx={styles.listMoviesTitle}>
					<Trans>Movies list</Trans> (
					{moviesByCastPersonData?.moviesByCastPerson?.cast?.length})
				</Typography>

				<ListContainer
					list={
						moviesByCastPersonData?.moviesByCastPerson?.cast as Array<Movie>
					}
					cardGridColumn={styles.cardsMovies}
				/>
			</Box>
		</Box>
	);
};

export default Person;
