import ListContainer from '@components/containers/listContainer/ListContainer';
import MainContainer from '@components/containers/mainContainer/MainContainer';
import Sidebar from '@components/sidebar/sidebar/Sidebar';
import {
	Movie,
	useSearchMoviesByGenreQuery,
} from '@graphql/__generated__/graphql-type';
import { Box, useTheme } from '@mui/material';
import { firstLetterCapitalize } from '@utils/index';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useStyles from './style';

const Genre = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
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
			<MainContainer>
				<Sidebar />
				<ListContainer
					list={data?.searchMoviesByGenre?.results as Array<Movie>}
					title={firstLetterCapitalize(
						genreName?.replaceAll('-', ' ') as string,
					)}
				/>
			</MainContainer>
		</Box>
	);
};

export default Genre;
