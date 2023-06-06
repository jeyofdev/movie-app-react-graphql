import SearchResultMovieCard from '@components/cards/searchResultMovieCard/SearchResultMovieCard';
import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import AlertBase from '@components/ui/alert/Alert';
import { useSearchMoviesQuery } from '@graphql/__generated__/graphql-type';
import { Box, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStyles from './style';

const SearchResults = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { search } = useParams();

	const { loading, error, data } = useSearchMoviesQuery({
		variables: {
			searchOptions: {
				query: search?.split(' ').join('+'),
			},
		},
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading) {
		return <LoaderContainer />;
	}

	if (error) {
		<AlertBase>An error has occurred !!!</AlertBase>;
	}

	return (
		<Box sx={styles.root}>
			<Typography variant='h3' sx={styles.title}>
				Search results ({data?.searchMovies?.results?.length})
			</Typography>

			<Box sx={styles.resultsBox}>
				{data?.searchMovies?.results?.map(movie => (
					<SearchResultMovieCard
						key={movie?.id}
						id={movie?.id}
						title={movie?.title}
						poster_path={movie?.poster_path}
						overview={movie?.overview}
						release_date={movie?.release_date}
					/>
				))}
			</Box>
		</Box>
	);
};

export default SearchResults;
