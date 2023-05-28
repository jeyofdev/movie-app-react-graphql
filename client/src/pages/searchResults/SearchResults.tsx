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
			<Typography variant='h1' sx={styles.title}>
				Search Results
			</Typography>
			{data?.searchMovies?.results?.map(movie => (
				<Typography
					variant='h5'
					key={movie?.id}
					sx={{ color: theme.palette.primary.main }}
				>
					{movie?.title}
				</Typography>
			))}
		</Box>
	);
};

export default SearchResults;
