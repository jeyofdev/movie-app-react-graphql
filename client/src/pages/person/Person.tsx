import PersonInfo from '@components/ui/personInfo/PersonInfo';
import { usePersonDetailsQuery } from '@graphql/__generated__/graphql-type';
import { Box, Typography, useTheme } from '@mui/material';
import { getAge, getAgeBetweenTwoDate } from '@utils/index';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const Person = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { personId } = useParams();

	const { loading, error, data } = usePersonDetailsQuery({
		variables: {
			personId: Number(personId),
		},
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// eslint-disable-next-line no-console
	console.log(loading, error, data);

	return (
		<Box>
			<Typography variant='h3' sx={styles.name}>
				{data?.personDetails?.name}
			</Typography>

			<Box sx={styles.topBox}>
				<Box
					component='img'
					sx={styles.poster}
					alt={data?.personDetails?.name as string}
					src={`https://image.tmdb.org/t/p/w500${data?.personDetails?.profile_path}`}
				/>

				<Box sx={styles.personalInfosBox}>
					<Box sx={{ display: 'flex', gap: theme.spacing(2) }}>
						<Box sx={styles.infoBox}>
							<PersonInfo
								title='Birthday'
								value={data?.personDetails?.birthday as string}
								subValue={
									!data?.personDetails?.deathday
										? getAge(data?.personDetails?.birthday as string)
										: null
								}
								subValueEnd='years old'
							/>
						</Box>

						{data?.personDetails?.deathday && (
							<Box sx={styles.infoBox}>
								<PersonInfo
									title='Deathday'
									value={data?.personDetails?.deathday as string}
									subValue={
										data?.personDetails?.deathday &&
										getAgeBetweenTwoDate(
											data?.personDetails?.birthday as string,
											data?.personDetails?.deathday as string,
										)
									}
									subValueEnd='years old'
								/>
							</Box>
						)}

						<Box sx={styles.infoBox}>
							<PersonInfo
								title='Place of Birth'
								value={data?.personDetails?.place_of_birth as string}
							/>
						</Box>
					</Box>
					<Box sx={styles.infoBox}>
						<PersonInfo
							title='Description'
							value={data?.personDetails?.biography as string}
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Person;
