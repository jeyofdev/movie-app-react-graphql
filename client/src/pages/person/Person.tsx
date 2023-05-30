import PersonInfo from '@components/ui/personInfo/PersonInfo';
import { usePersonDetailsQuery } from '@graphql/__generated__/graphql-type';
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

	const { loading, error, data } = usePersonDetailsQuery({
		variables: {
			personId: Number(personId),
		},
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading) {
		return <Box>Loading...</Box>;
	}

	if (error) {
		return <Box>{error?.message}</Box>;
	}

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
							value={
								viewMoreDescription
									? (data?.personDetails?.biography as string)
									: truncate(data?.personDetails?.biography as string, 200)
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
		</Box>
	);
};

export default Person;
