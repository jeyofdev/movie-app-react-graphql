import ListContainer from '@components/containers/listContainer/ListContainer';
import PersonInfo from '@components/ui/personInfo/PersonInfo';
import {
	Movie,
	useMoviesByCastPersonQuery,
	usePersonDetailsQuery,
} from '@graphql/__generated__/graphql-type';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { getAge, getAgeBetweenTwoDate, truncate } from '@utils/index';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const Person = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { personId } = useParams();
	const [viewMoreDescription, setViewMoreDescription] = useState(false);

	const {
		loading: personDetailsLoading,
		error: personDetailsError,
		data: personDetailsData,
	} = usePersonDetailsQuery({
		variables: {
			personId: Number(personId),
		},
	});

	const {
		loading: moviesByCastPersonLoading,
		error: moviesByCastPersonError,
		data: moviesByCastPersonData,
	} = useMoviesByCastPersonQuery({
		variables: {
			personId: Number(personId),
		},
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (personDetailsLoading || moviesByCastPersonLoading) {
		return <Box>Loading...</Box>;
	}

	if (personDetailsError || moviesByCastPersonError) {
		return <Box>{personDetailsError?.message}</Box>;
	}

	return (
		<Box>
			<Typography variant='h3' sx={styles.name}>
				{personDetailsData?.personDetails?.name}
			</Typography>

			<Box sx={styles.topBox}>
				<Box
					component='img'
					sx={styles.poster}
					alt={personDetailsData?.personDetails?.name as string}
					src={`https://image.tmdb.org/t/p/w500${personDetailsData?.personDetails?.profile_path}`}
				/>

				<Box sx={styles.personalInfosBox}>
					<Box sx={{ display: 'flex', gap: theme.spacing(2) }}>
						<Box sx={styles.infoBox}>
							<PersonInfo
								title='Birthday'
								value={personDetailsData?.personDetails?.birthday as string}
								subValue={
									!personDetailsData?.personDetails?.deathday
										? getAge(
												personDetailsData?.personDetails?.birthday as string,
										  )
										: null
								}
								subValueEnd='years old'
							/>
						</Box>

						{personDetailsData?.personDetails?.deathday && (
							<Box sx={styles.infoBox}>
								<PersonInfo
									title='Deathday'
									value={personDetailsData?.personDetails?.deathday as string}
									subValue={
										personDetailsData?.personDetails?.deathday &&
										getAgeBetweenTwoDate(
											personDetailsData?.personDetails?.birthday as string,
											personDetailsData?.personDetails?.deathday as string,
										)
									}
									subValueEnd='years old'
								/>
							</Box>
						)}

						<Box sx={styles.infoBox}>
							<PersonInfo
								title='Place of Birth'
								value={
									personDetailsData?.personDetails?.place_of_birth as string
								}
							/>
						</Box>
					</Box>
					<Box sx={styles.infoBox}>
						<PersonInfo
							title='Description'
							value={
								viewMoreDescription
									? (personDetailsData?.personDetails?.biography as string)
									: truncate(
											personDetailsData?.personDetails?.biography as string,
											200,
									  )
							}
						/>

						<Button
							sx={styles.viewMoreBtn}
							onClick={() => setViewMoreDescription(!viewMoreDescription)}
						>
							<Typography variant='body1' sx={styles.viewMoreTypo}>
								{!viewMoreDescription ? 'View more' : 'hide'}
							</Typography>
						</Button>
					</Box>
				</Box>
			</Box>

			<Box sx={styles.listMoviesBox}>
				<Typography variant='h5' sx={styles.listMoviesTitle}>
					Movies list (
					{moviesByCastPersonData?.moviesByCastPerson?.cast?.length})
				</Typography>

				<ListContainer
					list={
						moviesByCastPersonData?.moviesByCastPerson?.cast as Array<Movie>
					}
				/>
			</Box>
		</Box>
	);
};

export default Person;
