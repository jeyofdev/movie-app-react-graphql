import HomeCard from '@components/cards/homeCard/HomeCard';
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

	const getStyleCard = (i: number) => {
		switch (i) {
			case 0:
				return styles.cardBoxOne;

			case 1:
				return styles.cardBoxTwo;

			case 2:
				return styles.cardBoxThree;

			default:
				return null;
		}
	};

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
			<Box>
				<Box sx={styles.imagesBox}>
					{moviesList?.slice(1, 4)?.map((movie: Movie, i: number) => (
						<HomeCard
							key={movie?.id}
							poster_path={movie?.poster_path}
							boxStyles={{ ...styles.cardBox, ...getStyleCard(i) }}
						/>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
