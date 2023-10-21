import SearchResultMovieCard from '@components/cards/searchResultMovieCard/SearchResultMovieCard';
import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import AlertBase from '@components/ui/alert/Alert';
import useSearchMovie from '@hooks/useSearchMovie';
import useTheme from '@hooks/useTheme';
import { Plural, Trans } from '@lingui/macro';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import useStyles from './style';

const SearchResults = () => {
	const { theme } = useTheme();
	const styles = useStyles(theme);
	const { loading, error, data } = useSearchMovie();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (loading) {
		return <LoaderContainer />;
	}

	if (error) {
		return (
			<AlertBase>
				<Trans>An error has occurred !!!</Trans>
			</AlertBase>
		);
	}

	return (
		<Box sx={styles.root}>
			<Typography variant='h3' sx={styles.title}>
				<Plural
					value={data?.searchMovies?.results?.length as number}
					one='Search result (#)'
					other='Search results (#)'
				/>
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
