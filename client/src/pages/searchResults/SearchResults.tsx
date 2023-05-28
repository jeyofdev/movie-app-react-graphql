import SearchResultMovieCard from '@components/cards/searchResultMovieCard/SearchResultMovieCard';
import { useSearchMoviesQuery } from '@graphql/__generated__/graphql-type';
import { Box, Typography, useTheme } from '@mui/material';
import { useEffect } from 'react';
import useStyles from './style';

const SearchResults = () => {
	const theme = useTheme();
	const styles = useStyles(theme);

	const { loading, error, data } = useSearchMoviesQuery({
		variables: {
			searchOptions: {
				query: 'star wars',
				page: 1,
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
			<Typography variant='h3' sx={styles.title}>
				Search results ({data?.searchMovies?.results?.length})
			</Typography>

			{data?.searchMovies?.results?.map(movie => (
				<SearchResultMovieCard
					key={movie?.id}
					title={movie?.title}
					poster_path={movie?.poster_path}
					overview={movie?.overview}
					release_date={movie?.release_date}
				/>
			))}
		</Box>
	);
};

export default SearchResults;
