import ListContainer from '@components/containers/listContainer/ListContainer';
import {
	Movie,
	useSearchMoviesByGenreQuery,
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

	const { loading, error, data } = useSearchMoviesByGenreQuery({
		variables: {
			searchOptions: {
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
		<Box sx={styles.root}>
			<ListContainer
				list={data?.searchMoviesByGenre?.results as Array<Movie>}
				title={firstLetterCapitalize(genreName?.replaceAll('-', ' ') as string)}
			/>
		</Box>
	);
};

export default Genre;
