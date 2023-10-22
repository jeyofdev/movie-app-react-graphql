import LoaderContainer from '@components/containers/LoaderContainer/LoaderContainer';
import ListContainer from '@components/containers/listContainer/ListContainer';
import AlertBase from '@components/ui/alert/Alert';
import { TranslationContext } from '@context/TranslationContext';
import {
	Movie,
	useNowPlayingMoviesQuery,
} from '@graphql/__generated__/graphql-type';
import usePagination from '@hooks/usePagination';
import { Trans, t } from '@lingui/macro';
import { Box } from '@mui/material';
import { useContext, useEffect } from 'react';
import useStyles from './style';

const NowPlaying = () => {
	const styles = useStyles();
	const { currentLocale, currentRegion } = useContext(TranslationContext);
	const { page, handleChangePage } = usePagination();

	const { loading, error, data } = useNowPlayingMoviesQuery({
		variables: {
			options: {
				page,
				language: currentLocale,
				region: currentRegion,
			},
		},
		fetchPolicy: 'cache-and-network',
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

	return (
		<Box sx={styles.root}>
			<ListContainer
				list={data?.nowPlayingMovies?.results as Array<Movie>}
				title={t`Now playing movies`}
				totalPages={data?.nowPlayingMovies?.total_pages as number}
				currentPage={page}
				setCurrentPage={handleChangePage}
			/>
		</Box>
	);
};

export default NowPlaying;
