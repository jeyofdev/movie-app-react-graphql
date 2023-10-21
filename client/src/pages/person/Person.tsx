import DetailsPersonCard from '@components/cards/detailsPersonCard/DetailsPersonCard';
import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import AlertBase from '@components/ui/alert/Alert';
import { Movie } from '@graphql/__generated__/graphql-type';
import useMoviesByPerson from '@hooks/useMoviesByPerson';
import usePersonDetails from '@hooks/usePersonDetails';
import useTheme from '@hooks/useTheme';
import { Trans } from '@lingui/macro';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const Person = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { personId } = useParams();

	const {
		loading: personDetailsLoading,
		error: personDetailsError,
		data: personDetailsData,
	} = usePersonDetails(personId as string);

	const {
		loading: moviesByCastPersonLoading,
		error: moviesByCastPersonError,
		data: moviesByCastPersonData,
	} = useMoviesByPerson(personId as string);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (personDetailsLoading || moviesByCastPersonLoading) {
		return <LoaderContainer />;
	}

	if (personDetailsError || moviesByCastPersonError) {
		return (
			<AlertBase>
				<Trans>An error has occurred !!!</Trans>
			</AlertBase>
		);
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
