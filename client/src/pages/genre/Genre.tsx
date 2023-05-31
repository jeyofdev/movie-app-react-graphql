import ListContainer from '@components/containers/listContainer/ListContainer';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import {
	Movie,
	useDiscoverMoviesByGenreQuery,
} from '@graphql/__generated__/graphql-type';
import { Box } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useStyles from './style';

const Genre = () => {
	const styles = useStyles();
	const location = useLocation();
	const { genreName } = useParams();

	const { loading, error, data } = useDiscoverMoviesByGenreQuery({
		variables: {
			discoverOptions: {
				with_genres: Number(location?.state?.genreId),
			},
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
		<MainContainer>
			<Box sx={styles.root}>
				<ListContainer
					list={data?.discoverMoviesByGenre?.results as Array<Movie>}
					title={firstLetterCapitalize(
						genreName?.replaceAll('-', ' ') as string,
					)}
				/>
			</Box>
		</MainContainer>
	);
};

export default Genre;
