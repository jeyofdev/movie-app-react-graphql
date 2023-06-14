import Topbar from '@components/topbar/Topbar';
import AlertBase from '@components/ui/alert/Alert';
import { ThemeContext } from '@context/ThemeContext';
import { TranslationContext } from '@context/TranslationContext';
import {
	Movie,
	usePopularMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import { Trans } from '@lingui/macro';
import { Box, Divider, useTheme } from '@mui/material';
import Home from '@pages/home/Home';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../../types/enums';
import LoaderContainer from '../LoaderContainer/LoaderContainer';
import useStyles from './style';

const LandingContainer = () => {
	const theme = useTheme();
	const styles = useStyles(theme);
	const { state } = useLocation();
	const navigate = useNavigate();
	const { themeMode } = useContext(ThemeContext);
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
					(_: Movie, index: number) => index < 10,
				),
			);
		},
	});

	useEffect(() => {
		if (state?.from?.pathname !== RoutesEnum.ROOT) {
			navigate(state?.from?.pathname);
		}
	}, [navigate, state?.from?.pathname]);

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
		<Box sx={styles.root(themeMode, moviesList[4]?.backdrop_path as string)}>
			<Box sx={styles.contentBox}>
				<Topbar landing />
				<Divider sx={styles.divider(themeMode)} />

				<Box sx={styles.mainContentBox}>
					<Home list={moviesList} />
				</Box>
			</Box>
		</Box>
	);
};

export default LandingContainer;
