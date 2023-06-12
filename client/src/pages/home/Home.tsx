import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	Movie,
	usePopularMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Trans } from '@lingui/macro';
import { Box } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import useStyles from './style';

const Home = () => {
	const styles = useStyles();
	const { currentLocale } = useContext(TranslationContext);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [moviesList, setMoviesList] = useState<Array<Movie>>([]);

	const { loading, error } = usePopularMoviesQuery({
		variables: {
			options: {
				language: currentLocale,
			},
		},
		fetchPolicy: 'cache-and-network',
		onCompleted(data) {
			setMoviesList(
				(data?.popularMovies?.results as Array<Movie>)?.filter(
					(_: Movie, index: number) => index < 5,
				),
			);
		},
	});

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

	return <Box sx={styles.root}>welcome</Box>;
};

export default Home;
